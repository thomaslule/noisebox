import Tone from 'tone';
import { componentsGetAll, connectionsGetAll, effectsGetAll, bindingsGetById } from './reducer';
import { createNoiseComponent } from './componentTypesDictionary';
import { createEffect } from './effectTypesDictionary';
import { resetBindings, onPress, onRelease, onMove } from './controller';

let noiseComponents = [];

export default (params) => {
  Tone.Master.mute = params.muteAll;
  if (!params.error) {
    noiseComponents.forEach((c) => {
      if (c.id !== 'master') c.toneComponent.dispose();
    });
  }

  noiseComponents = componentsGetAll(params).map(component => createNoiseComponent(component));
  noiseComponents.push({
    id: 'master',
    toneComponent: Tone.Master,
    currentParams: {},
  });

  connectionsGetAll(params).forEach(({ fromComponent, toComponent, toInput }) => {
    const from = noiseComponents.find(c => c.id === fromComponent);
    const to = noiseComponents.find(c => c.id === toComponent);
    if (toInput === 'main') {
      from.toneComponent.connect(to.toneComponent);
    } else {
      from.toneComponent.connect(to.toneComponent[toInput]);
    }
  });

  resetBindings();

  effectsGetAll(params).forEach((effect) => {
    const comp = noiseComponents.find(c => c.id === effect.component);
    const effectToApply = createEffect(effect.effectType, effect.params, comp);
    bindingsGetById(params, effect.binding).actions.forEach((action) => {
      const [gesture, button] = action.split(' ');
      if (gesture === 'press') onPress(button, effectToApply);
      if (gesture === 'release') onRelease(button, effectToApply);
      if (gesture === 'move') onMove(button, effectToApply);
    });
  });
};
