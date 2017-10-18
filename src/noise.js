import Tone from 'tone';
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

  noiseComponents = params.components.map(component => createNoiseComponent(component));
  noiseComponents.push({
    id: 'master',
    toneComponent: Tone.Master,
    currentParams: {},
  });

  params.connections.forEach(({ fromComponentId, toComponentId, toInput }) => {
    const from = noiseComponents.find(c => c.id === fromComponentId);
    const to = noiseComponents.find(c => c.id === toComponentId);
    if (toInput === 'main') {
      from.toneComponent.connect(to.toneComponent);
    } else {
      from.toneComponent.connect(to.toneComponent[toInput]);
    }
  });

  resetBindings();

  params.bindings.forEach((binding) => {
    binding.actions.forEach((action) => {
      binding.effects.forEach((effect) => {
        const comp = noiseComponents.find(c => c.id === effect.componentId);
        const effectToApply = createEffect(effect.effectTypeId, effect.params, comp);
        const [gesture, button] = action.split(' ');
        if (gesture === 'press') onPress(button, effectToApply);
        if (gesture === 'release') onRelease(button, effectToApply);
        if (gesture === 'move') onMove(button, effectToApply);
      });
    });
  });
};
