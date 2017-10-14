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

const effects = [
  createSetNumberParamEffect('frequency', 'Frequency', ['oscillator', 'filter', 'lfo'], 440),
  createMoveNumberParamEffect('frequency', 'Frequency', ['oscillator', 'filter', 'lfo'], 100),
  createSetNumberParamEffect('gain', 'Gain', ['filter'], 0),
  createMoveNumberParamEffect('gain', 'Gain', ['filter'], 10),
  createSetNumberParamEffect('Q', 'Q', ['filter'], 1),
  createMoveNumberParamEffect('Q', 'Q', ['filter'], 10),
  createSetNumberParamEffect('detune', 'Detune', ['oscillator'], 0),
  createMoveNumberParamEffect('detune', 'Detune', ['oscillator'], 100),
  createSetNumberParamEffect('amplitude', 'Amplitude', ['lfo'], 0),
  createMoveNumberParamEffect('amplitude', 'Amplitude', ['lfo'], 1),
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
