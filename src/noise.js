import Tone from 'tone';
import { resetBindings, onPress, onRelease, onMoveStick, onMoveTrigger } from './controller';

let components = [];

export default (params) => {
  components.forEach((c) => {
    if (c.component.stop) c.component.stop();
  });
  if (params.muteAll) {
    return;
  }
  components = params.components.map((component) => {
    if (component.type === 'oscillator') {
      const o = new Tone.Oscillator();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      o.start();
      return {
        id: component.id,
        connectTo: component.connectTo,
        component: o,
        fixedFrequency: component.params.frequency,
      };
    }
    if (component.type === 'filter') {
      const o = new Tone.Filter();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      return {
        id: component.id,
        connectTo: component.connectTo,
        component: o,
        fixedFrequency: component.params.frequency,
      };
    }
    return null;
  });
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
    let effect = () => null;
    if (binding.effect === 'set_frequency') {
      effect = () => {
        comp.fixedFrequency = Number(binding.params.frequency);
        comp.component.frequency.value = comp.fixedFrequency;
      };
    }
    if (binding.effect === 'move_frequency') {
      effect = (value) => {
        comp.component.frequency.value = Number(comp.fixedFrequency) + (Number(value) * Number(binding.params.sensibility));
      };
    }
    const [action, button] = binding.action.split(' ');
    if (action === 'press') onPress(button, effect);
    if (action === 'release') onRelease(button, effect);
    if (action === 'move' && button.includes('STICK')) onMoveStick(button, effect);
    if (action === 'move' && (button === 'LT' || button === 'RT')) onMoveTrigger(button, effect);
  });
};
