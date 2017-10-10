import Tone from 'tone';
import { resetBindings, onPress, onRelease, onMoveStick } from './controller';

let components = [];

export default (params) => {
  components.forEach(c => c.component.stop());
  components = params.components.map((component) => {
    if (component.type === 'oscillator') {
      const o = new Tone.Oscillator();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      if (component.params.toMaster) o.toMaster();
      o.start();
      return { id: component.id, component: o, fixedFrequency: component.params.frequency };
    }
    return null;
  });
  resetBindings();
  params.bindings.forEach((binding) => {
    if (binding.component === 'none' || binding.effect.type === 'none') return;
    const comp = components.find(c => c.id === binding.component);
    let effect = () => null;
    if (binding.effect.type === 'set_frequency') {
      effect = () => {
        comp.fixedFrequency = Number(binding.effect.params.frequency);
        comp.component.frequency.value = comp.fixedFrequency;
      };
    }
    if (binding.effect.type === 'move_frequency') {
      effect = (value) => {
        comp.component.frequency.value = Number(comp.fixedFrequency) + (Number(value) * Number(binding.effect.params.sensibility));
      };
    }
    const [action, button] = binding.button.split(' ');
    if (action === 'press') onPress(button, effect);
    if (action === 'release') onRelease(button, effect);
    if (action === 'move' && button.includes('STICK')) onMoveStick(button, effect);
  });
};
