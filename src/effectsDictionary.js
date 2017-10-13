import actions from './actionsDictionary';

const effects = [
  {
    name: 'set_frequency',
    text: 'Set frequency',
    actionType: 'press',
    components: ['oscillator', 'filter'],
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
    components: ['oscillator', 'filter'],
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
