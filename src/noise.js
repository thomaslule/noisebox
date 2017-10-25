import Tone from 'tone';
import { components, connections, effects, bindings, muteAll, error, deadzone } from './reducer';
import { createNoiseComponent } from './componentTypesDictionary';
import { createEffect } from './effectTypesDictionary';
import { resetBindings, setDeadzone, onPress, onRelease, onMove } from './controller';
import { get } from './actionsDictionary';

let noiseComponents = [];

export default (params) => {
  Tone.Master.mute = muteAll.isActive(params);
  if (!error.isPresent(params)) {
    noiseComponents.forEach((c) => {
      if (c.id !== 'master') c.toneComponent.dispose();
    });
  }

  noiseComponents = components.getAll(params).map(component => createNoiseComponent(component));
  noiseComponents.push({
    id: 'master',
    toneComponent: Tone.Master,
    currentParams: {},
  });

  connections.getAll(params).forEach(({ fromComponent, toComponent, toInput }) => {
    const from = noiseComponents.find(c => c.id === fromComponent);
    const to = noiseComponents.find(c => c.id === toComponent);
    if (toInput === 'main') {
      from.toneComponent.connect(to.toneComponent);
    } else {
      from.toneComponent.connect(to.toneComponent[toInput]);
    }
  });

  resetBindings();
  setDeadzone(deadzone.get(params));

  effects.getAll(params).forEach((effect) => {
    const comp = noiseComponents.find(c => c.id === effect.component);
    const effectToApply = createEffect(effect.effectType, effect.params, comp);
    bindings.getById(params, effect.binding).actions.forEach((actionId) => {
      const action = get(actionId);
      if (action.gesture === 'press') onPress(action.gamepad - 1, action.button, effectToApply);
      if (action.gesture === 'release') onRelease(action.gamepad - 1, action.button, effectToApply);
      if (action.gesture === 'move') onMove(action.gamepad - 1, action.button, effectToApply);
    });
  });
};
