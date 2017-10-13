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
        fixedFrequency: component.params.frequency,
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
    ],
    defaultParams: { type: 'lowpass', frequency: 440 },
    hasInput: true,
    create: (component) => {
      const o = new Tone.Filter();
      o.type = component.params.type;
      o.frequency.value = component.params.frequency;
      return {
        id: component.id,
        component: o,
        connectTo: component.connectTo,
        fixedFrequency: component.params.frequency,
      };
    },
  },
];

export const get = component => dic.find(c => c.name === component);

export const getAll = () => clone(dic);

export const createComponent = component => get(component.type).create(component);
