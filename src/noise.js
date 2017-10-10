import Tone from 'tone';
import { resetBindings, onPress, onRelease } from './controller';

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
      return { id: component.id, component: o };
    }
    return null;
  });
  resetBindings();
  params.bindings.forEach((binding) => {
    if (binding.component === 'none' || binding.effect.type === 'none') return;
    const comp = components.find(c => c.id === binding.component).component;
    let effect = () => null;
    if (binding.effect.type === 'set_frequency') effect = () => { comp.frequency.value = binding.effect.params.frequency; };
    const [action, button] = binding.button.split(' ');
    if (action === 'press') onPress(button, effect);
    if (action === 'release') onRelease(button, effect);
  });
};
