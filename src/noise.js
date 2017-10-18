import Tone from 'tone';
import { createComponent } from './componentsDictionary';
import { createEffect } from './effectsDictionary';
import { resetBindings, onPress, onRelease, onMove } from './controller';

let components = [];

export default (params) => {
  Tone.Master.mute = params.muteAll;
  if (!params.error) {
    components.forEach((c) => {
      if (c.id !== 'master') c.component.dispose();
    });
  }

  components = params.components.map(component => createComponent(component));
  components.push({
    id: 'master',
    component: Tone.Master,
    currentParams: {},
  });

  params.connections.forEach(({ fromComponent, toComponent, toInput }) => {
    const from = components.find(c => c.id === fromComponent);
    const to = components.find(c => c.id === toComponent);
    if (toInput === 'main') {
      from.component.connect(to.component);
    } else {
      from.component.connect(to.component[toInput]);
    }
  });

  resetBindings();

  params.bindings.forEach((binding) => {
    binding.actions.forEach((action) => {
      binding.effects.forEach((effect) => {
        const comp = components.find(c => c.id === effect.componentId);
        const effectToApply = createEffect(effect.effectId, effect.params, comp);
        const [gesture, button] = action.split(' ');
        if (gesture === 'press') onPress(button, effectToApply);
        if (gesture === 'release') onRelease(button, effectToApply);
        if (gesture === 'move') onMove(button, effectToApply);
      });
    });
  });
};
