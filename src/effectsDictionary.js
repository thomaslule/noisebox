import Tone from 'tone';
import actions from './actionsDictionary';

const toHertz = val => Tone.Frequency(val).toFrequency();

const createSetNumberParamEffect = (name, text, components, initVal) => {
  const initParams = {};
  initParams[name] = initVal;
  return {
    name: `set_${name}`,
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
    create: (params, component) => () => {
      component.currentParams[name] = params[name];
      component.component[name].value = params[name];
    },
  };
};

const createMoveNumberParamEffect = (name, text, components, initVal) => ({
  name: `move_${name}`,
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
  create: (params, c) => (value) => {
    c.component[name].value = toHertz(c.currentParams[name]) + (value * params.sensibility);
  },
});

const createSetSelectParamEffect = (name, text, components, options, initVal) => {
  const initParams = {};
  initParams[name] = initVal;
  return {
    name: `set_${name}`,
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
    create: (params, component) => () => {
      component.currentParams[name] = params[name];
      component.component[name] = params[name];
    },
  };
};

const effects = [
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
  {
    name: 'trigger_attack',
    text: 'Trigger attack',
    actionType: 'press',
    components: ['envelope'],
    params: [],
    initParams: {},
    create: (params, component) => () => {
      component.component.triggerAttack();
    },
  },
  {
    name: 'trigger_release',
    text: 'Trigger release',
    actionType: 'press',
    components: ['envelope'],
    params: [],
    initParams: {},
    create: (params, component) => () => {
      component.component.triggerRelease();
    },
  },
  {
    name: 'trigger_attack_release',
    text: 'Trigger attack release',
    actionType: 'press',
    components: ['envelope'],
    params: [
      {
        name: 'duration',
        text: 'Duration',
        type: 'number',
      },
    ],
    initParams: { duration: 0.5 },
    create: (params, component) => () => {
      component.component.triggerAttackRelease(params.duration);
    },
  },
  {
    name: 'switch_mute',
    text: 'Switch mute',
    actionType: 'press',
    components: ['oscillator'],
    params: [],
    initParams: {},
    create: (params, component) => () => {
      component.component.mute = !component.component.mute;
    },
  },
];

export const effectsFor = (actionId, component) => {
  if (component === 'none') return [];
  const actionType = actions.find(a => a.id === actionId).type;
  return effects.filter(e => e.actionType === actionType)
    .filter(e => e.components.includes(component));
};

export const get = effect => effects.find(e => e.name === effect);

export const createEffect = (effect, params, component) => get(effect).create(params, component);
