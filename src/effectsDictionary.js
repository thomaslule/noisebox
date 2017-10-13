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
      component.fixedFrequency = Number(params.frequency);
      component.component.frequency.value = component.fixedFrequency;
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
      component.component.frequency.value = Number(component.fixedFrequency) + (Number(value) * Number(params.sensibility));
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
