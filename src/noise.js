import { createComponent } from './componentsDictionary';
import { createEffect } from './effectsDictionary';
import { resetBindings, onPress, onRelease, onMoveStick, onMoveTrigger } from './controller';

let components = [];

export default (params) => {
  components.forEach((c) => {
    if (c.component.stop) c.component.stop();
  });
  if (params.muteAll) {
    return;
  }
  components = params.components.map(component => createComponent(component));
  components.forEach((c) => {
    if (c.connectTo === 'master') {
      c.component.toMaster();
    } else {
      c.component.connect(components.find(c2 => c2.id === c.connectTo).component);
    }
  });
  resetBindings();
  params.bindings.forEach((binding) => {
    if (binding.component === 'none' || binding.effect === 'none') return;
    const comp = components.find(c => c.id === binding.component);
    const effect = createEffect(binding.effect, binding.params, comp);
    const [action, button] = binding.action.split(' ');
    if (action === 'press') onPress(button, effect);
    if (action === 'release') onRelease(button, effect);
    if (action === 'move' && button.includes('STICK')) onMoveStick(button, effect);
    if (action === 'move' && (button === 'LT' || button === 'RT')) onMoveTrigger(button, effect);
  });
};
