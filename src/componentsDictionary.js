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
    create: (component) => {
      const o = new Tone.Oscillator(component.params.frequency, component.params.type);
      o.volume.value = component.params.volume;
      o.mute = component.params.mute;
      o.detune.value = component.params.detune;
      o.start();
      return {
        id: component.id,
        component: o,
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
    create: (component) => {
      const o = new Tone.Filter(component.params.frequency, component.params.type);
      o.gain.value = component.params.gain;
      return {
        id: component.id,
        component: o,
        currentParams: component.params,
      };
    },
  },
  {
    name: 'lfo',
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
    create: (component) => {
      const lfo = new Tone.LFO(
        component.params.frequency,
        component.params.min,
        component.params.max,
      );
      lfo.amplitude.value = component.params.amplitude;
      lfo.start();
      return {
        id: component.id,
        component: lfo,
        currentParams: component.params,
      };
    },
  },
  {
    name: 'envelope',
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
    create: (component) => {
      const envelope = new Tone.Envelope(
        component.params.attack,
        component.params.decay,
        component.params.sustain,
        component.params.release,
      );
      envelope.attackCurve = component.params.attackCurve;
      envelope.releaseCurve = component.params.releaseCurve;
      return {
        id: component.id,
        component: envelope,
        currentParams: component.params,
      };
    },
  },
];

export const get = component => dic.find(c => c.name === component);

export const getAll = () => clone(dic);

export const createComponent = component => get(component.type).create(component);
