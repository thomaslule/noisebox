import Tone from 'tone';

let components = [];

export default (params) => {
  components.forEach(c => c.stop());
  components = params.components.map((component) => {
    if (component.type === 'oscillator') {
      const o = new Tone.Oscillator();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      if (component.params.toMaster) o.toMaster();
      o.start();
      return o;
    }
    return null;
  });
};
