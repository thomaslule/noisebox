import Tone from 'tone';
import { getAll } from './componentTypesDictionary';

const toHertz = val => Tone.Frequency(val).toFrequency();

const createSetNumberParamEffect = (name, text, components, initVal) => {
  const initParams = {};
  initParams[name] = initVal;
  return {
    id: `set_${name}`,
    text: `Set ${text}`,
    actionType: 'press',
    components,
    params: [
      {
        name,
        text,
        type: 'number',
      },
    ],
    initParams,
    create: (params, noiseComponent) => () => {
      noiseComponent.currentParams[name] = params[name];
      noiseComponent.toneComponent[name].value = params[name];
    },
  };
};

const createMoveNumberParamEffect = (name, text, components, initVal) => ({
  id: `move_${name}`,
  text: `Move ${text}`,
  actionType: 'move',
  components,
  params: [
    {
      name: 'sensibility',
      text: 'Sensibility',
      type: 'number',
    },
  ],
  initParams: { sensibility: initVal },
  create: (params, noiseComponent) => (value) => {
    noiseComponent.toneComponent[name].value =
      toHertz(noiseComponent.currentParams[name]) + (value * params.sensibility);
  },
});

const createSetSelectParamEffect = (name, text, components, options, initVal) => {
  const initParams = {};
  initParams[name] = initVal;
  return {
    id: `set_${name}`,
    text: `Set ${text}`,
    actionType: 'press',
    components,
    params: [
      {
        name,
        text,
        type: 'select',
        options,
      },
    ],
    initParams,
    create: (params, noiseComponent) => () => {
      noiseComponent.currentParams[name] = params[name];
      noiseComponent.toneComponent[name] = params[name];
    },
  };
};

const effectTypes = [
  {
    id: 'none',
    text: 'None',
    actionType: 'press',
    components: getAll().map(c => c.id),
    params: [],
    initParams: {},
    create: () => () => {},
  },
  {
    id: 'none',
    text: 'None',
    actionType: 'move',
    components: getAll().map(c => c.id),
    params: [],
    initParams: {},
    create: () => () => {},
  },
  createSetNumberParamEffect('frequency', 'Frequency', ['oscillator', 'filter', 'lfo'], 440),
  createMoveNumberParamEffect('frequency', 'Frequency', ['oscillator', 'filter', 'lfo'], 100),
  createSetNumberParamEffect('gain', 'Gain', ['filter', 'gain'], 0),
  createMoveNumberParamEffect('gain', 'Gain', ['filter', 'gain'], 10),
  createSetNumberParamEffect('Q', 'Q', ['filter'], 1),
  createMoveNumberParamEffect('Q', 'Q', ['filter'], 10),
  createSetNumberParamEffect('detune', 'Detune', ['oscillator'], 0),
  createMoveNumberParamEffect('detune', 'Detune', ['oscillator'], 100),
  createSetNumberParamEffect('amplitude', 'Amplitude', ['lfo'], 0),
  createMoveNumberParamEffect('amplitude', 'Amplitude', ['lfo'], 1),
  createSetSelectParamEffect('type', 'Type', ['oscillator', 'lfo'], ['sine', 'square', 'triangle', 'sawtooth'], 'sine'),
  createSetSelectParamEffect('type', 'Type', ['noise'], ['white', 'brown', 'pink'], 'white'),
  {
    id: 'trigger_attack',
    text: 'Trigger attack',
    actionType: 'press',
    components: ['envelope', 'scaled_envelope'],
    params: [],
    initParams: {},
    create: (params, noiseComponent) => () => {
      noiseComponent.toneComponent.triggerAttack();
    },
  },
  {
    id: 'trigger_release',
    text: 'Trigger release',
    actionType: 'press',
    components: ['envelope', 'scaled_envelope'],
    params: [],
    initParams: {},
    create: (params, noiseComponent) => () => {
      noiseComponent.toneComponent.triggerRelease();
    },
  },
  {
    id: 'trigger_attack_release',
    text: 'Trigger attack release',
    actionType: 'press',
    components: ['envelope', 'scaled_envelope'],
    params: [
      {
        name: 'duration',
        text: 'Duration',
        type: 'number',
      },
    ],
    initParams: { duration: 0.5 },
    create: (params, noiseComponent) => () => {
      noiseComponent.toneComponent.triggerAttackRelease(params.duration);
    },
  },
  {
    id: 'switch_mute',
    text: 'Switch mute',
    actionType: 'press',
    components: ['oscillator'],
    params: [],
    initParams: {},
    create: (params, noiseComponent) => () => {
      noiseComponent.toneComponent.mute = !noiseComponent.toneComponent.mute;
    },
  },
];

export const effectTypesFor = (actionType, componentTypeId) => {
  if (componentTypeId === 'none') return [];
  return effectTypes.filter(e => e.actionType === actionType)
    .filter(e => e.components.includes(componentTypeId));
};

export const get = effectTypeId => effectTypes.find(e => e.id === effectTypeId);

export const createEffect =
  (effectTypeId, params, noiseComponent) => get(effectTypeId).create(params, noiseComponent);
