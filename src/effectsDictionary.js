import actions from './actionsDictionary';

const effects = [
  {
    name: 'set_frequency',
    text: 'Set frequency',
    actionType: 'press',
    components: ['oscillator', 'filter', 'lfo'],
    params: [
      {
        name: 'frequency',
        text: 'Frequency',
        type: 'number',
      },
    ],
    initParams: { frequency: 440 },
    create: (params, component) => () => {
      component.currentParams.frequency = Number(params.frequency);
      component.component.frequency.value = Number(params.frequency);
    },
  },
  {
    name: 'move_frequency',
    text: 'Move frequency',
    actionType: 'move',
    components: ['oscillator', 'filter', 'lfo'],
    params: [
      {
        name: 'sensibility',
        text: 'Sensibility',
        type: 'number',
      },
    ],
    initParams: { sensibility: 100 },
    create: (params, component) => (value) => {
      component.component.frequency.value = Number(component.currentParams.frequency) + (Number(value) * Number(params.sensibility));
    },
  },
  {
    name: 'set_gain',
    text: 'Set gain',
    actionType: 'press',
    components: ['filter'],
    params: [
      {
        name: 'gain',
        text: 'Gain',
        type: 'number',
      },
    ],
    initParams: { gain: 0 },
    create: (params, component) => () => {
      component.currentParams.gain = Number(params.gain);
      component.component.gain.value = Number(params.gain);
    },
  },
  {
    name: 'move_gain',
    text: 'Move gain',
    actionType: 'move',
    components: ['filter'],
    params: [
      {
        name: 'sensibility',
        text: 'Sensibility',
        type: 'number',
      },
    ],
    initParams: { sensibility: 10 },
    create: (params, component) => (value) => {
      component.component.gain.value = Number(component.currentParams.gain) + (Number(value) * Number(params.sensibility));
    },
  },
  {
    name: 'set_q',
    text: 'Set Q',
    actionType: 'press',
    components: ['filter'],
    params: [
      {
        name: 'Q',
        text: 'Q',
        type: 'number',
      },
    ],
    initParams: { Q: 1 },
    create: (params, component) => () => {
      component.currentParams.Q = Number(params.Q);
      component.component.Q.value = Number(params.Q);
    },
  },
  {
    name: 'move_q',
    text: 'Move Q',
    actionType: 'move',
    components: ['filter'],
    params: [
      {
        name: 'sensibility',
        text: 'Sensibility',
        type: 'number',
      },
    ],
    initParams: { sensibility: 10 },
    create: (params, component) => (value) => {
      component.component.Q.value = Number(component.currentParams.Q) + (Number(value) * Number(params.sensibility));
    },
  },
  {
    name: 'set_detune',
    text: 'Set detune',
    actionType: 'press',
    components: ['oscillator'],
    params: [
      {
        name: 'detune',
        text: 'Detune',
        type: 'number',
      },
    ],
    initParams: { detune: 0 },
    create: (params, component) => () => {
      component.currentParams.detune = Number(params.detune);
      component.component.detune.value = Number(params.detune);
    },
  },
  {
    name: 'move_detune',
    text: 'Move detune',
    actionType: 'move',
    components: ['oscillator'],
    params: [
      {
        name: 'sensibility',
        text: 'Sensibility',
        type: 'number',
      },
    ],
    initParams: { sensibility: 100 },
    create: (params, component) => (value) => {
      component.component.detune.value = Number(component.currentParams.detune) + (Number(value) * Number(params.sensibility));
    },
  },
  {
    name: 'set_amplitude',
    text: 'Set amplitude',
    actionType: 'press',
    components: ['lfo'],
    params: [
      {
        name: 'amplitude',
        text: 'Amplitude',
        type: 'number',
      },
    ],
    initParams: { detune: 0 },
    create: (params, component) => () => {
      component.currentParams.amplitude = Number(params.amplitude);
      component.component.amplitude.value = Number(params.amplitude);
    },
  },
  {
    name: 'move_amplitude',
    text: 'Move amplitude',
    actionType: 'move',
    components: ['lfo'],
    params: [
      {
        name: 'sensibility',
        text: 'Sensibility',
        type: 'number',
      },
    ],
    initParams: { sensibility: 1 },
    create: (params, component) => (value) => {
      component.component.amplitude.value = Number(component.currentParams.amplitude) + (Number(value) * Number(params.sensibility));
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
