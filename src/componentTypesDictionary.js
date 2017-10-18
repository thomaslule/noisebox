import clone from 'clone';
import Tone from 'tone';

const dic = [
  {
    id: 'oscillator',
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
      {
        name: 'detune',
        text: 'Detune',
        type: 'number',
      },
      {
        name: 'phase',
        text: 'Phase',
        type: 'number',
      },
      {
        name: 'volume',
        text: 'Volume',
        type: 'number',
      },
      {
        name: 'mute',
        text: 'Mute/Unmute',
        textTrue: 'Unmute',
        textFalse: 'Mute',
        type: 'boolean',
      },
    ],
    defaultParams: {
      type: 'sine', frequency: 440, detune: 0, phase: 0, volume: 0, mute: false,
    },
    inputs: ['frequency'],
    constructor: Tone.Oscillator,
  },
  {
    id: 'filter',
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
      {
        name: 'Q',
        text: 'Q',
        type: 'number',
      },
    ],
    defaultParams: {
      type: 'lowpass', frequency: 440, gain: 0, Q: 1,
    },
    inputs: ['main', 'frequency', 'gain', 'Q'],
    constructor: Tone.Filter,
  },
  {
    id: 'lfo',
    text: 'LFO',
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
      {
        name: 'min',
        text: 'Min',
        type: 'number',
      },
      {
        name: 'max',
        text: 'Max',
        type: 'number',
      },
      {
        name: 'amplitude',
        text: 'Amplitude',
        type: 'number',
      },
    ],
    defaultParams: {
      type: 'sine', frequency: 1, min: 100, max: 300, amplitude: 1,
    },
    inputs: ['frequency', 'amplitude'],
    constructor: Tone.LFO,
  },
  {
    id: 'envelope',
    text: 'Envelope',
    params: [
      {
        name: 'attack',
        text: 'Attack',
        type: 'number',
      },
      {
        name: 'decay',
        text: 'Decay',
        type: 'number',
      },
      {
        name: 'sustain',
        text: 'Sustain',
        type: 'number',
      },
      {
        name: 'release',
        text: 'Release',
        type: 'number',
      },
      {
        name: 'attackCurve',
        text: 'Attack curve',
        type: 'select',
        options: ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step'],
      },
      {
        name: 'releaseCurve',
        text: 'Release curve',
        type: 'select',
        options: ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step'],
      },
    ],
    defaultParams: {
      attack: 0.01, decay: 0.1, sustain: 0.5, release: 1, attackCurve: 'linear', releaseCurve: 'linear',
    },
    inputs: [],
    constructor: Tone.Envelope,
  },
  {
    id: 'scaled_envelope',
    text: 'Scaled envelope',
    params: [
      {
        name: 'attack',
        text: 'Attack',
        type: 'number',
      },
      {
        name: 'decay',
        text: 'Decay',
        type: 'number',
      },
      {
        name: 'sustain',
        text: 'Sustain',
        type: 'number',
      },
      {
        name: 'release',
        text: 'Release',
        type: 'number',
      },
      {
        name: 'min',
        text: 'Min',
        type: 'number',
      },
      {
        name: 'max',
        text: 'Max',
        type: 'number',
      },
      {
        name: 'attackCurve',
        text: 'Attack curve',
        type: 'select',
        options: ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step'],
      },
      {
        name: 'releaseCurve',
        text: 'Release curve',
        type: 'select',
        options: ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step'],
      },
    ],
    defaultParams: {
      attack: 0.01, decay: 0.1, sustain: 0.5, release: 1, min: 0, max: 1, attackCurve: 'linear', releaseCurve: 'linear',
    },
    inputs: [],
    constructor: Tone.ScaledEnvelope,
  },
  {
    id: 'gain',
    text: 'Gain',
    params: [
      {
        name: 'gain',
        text: 'Gain',
        type: 'number',
      },
    ],
    defaultParams: { gain: 1 },
    inputs: ['main', 'gain'],
    constructor: Tone.Gain,
  },
  {
    id: 'noise',
    text: 'Noise',
    params: [
      {
        name: 'type',
        text: 'Type',
        type: 'select',
        options: ['white', 'brown', 'pink'],
      },
    ],
    defaultParams: { type: 'white' },
    inputs: [],
    constructor: Tone.Noise,
  },
];

export const get = componentTypeId => dic.find(ct => ct.id === componentTypeId);

export const getAll = () => clone(dic);

export const createNoiseComponent = (component) => {
  const c = new (get(component.typeId).constructor)(component.params);
  if (c.start) c.start();
  return {
    id: component.id,
    toneComponent: c,
    currentParams: component.params,
  };
};
