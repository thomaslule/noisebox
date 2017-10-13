import clone from 'clone';
import Tone from 'tone';

const dic = [
  {
    name: 'oscillator',
    text: 'Oscillator',
    params: [
      {
        name: 'type',
        text: 'Type',
        type: 'select',
        options: ['sine', 'square', 'triangle', 'sawtooth'],
      },
      {
        name: 'frequency',
        text: 'Frequency',
        type: 'number',
      },
    ],
    defaultParams: { type: 'sine', frequency: 440 },
    hasInput: false,
    create: (component) => {
      const o = new Tone.Oscillator();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      o.start();
      return {
        id: component.id,
        component: o,
        connectTo: component.connectTo,
        currentParams: component.params,
      };
    },
  },
  {
    name: 'filter',
    text: 'Filter',
    params: [
      {
        name: 'frequency',
        text: 'Frequency',
        type: 'number',
      },
      {
        name: 'type',
        text: 'Type',
        type: 'select',
        options: ['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'notch', 'allpass', 'peaking'],
      },
      {
        name: 'gain',
        text: 'Gain',
        type: 'number',
      },
    ],
    defaultParams: { type: 'lowpass', frequency: 440, gain: 0 },
    hasInput: true,
    create: (component) => {
      const o = new Tone.Filter(component.params.frequency, component.params.type);
      o.gain.value = component.params.gain;
      return {
        id: component.id,
        component: o,
        connectTo: component.connectTo,
        currentParams: component.params,
      };
    },
  },
];

export const get = component => dic.find(c => c.name === component);

export const getAll = () => clone(dic);

export const createComponent = component => get(component.type).create(component);
