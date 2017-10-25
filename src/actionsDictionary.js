import cloneDeep from 'lodash/cloneDeep';
import { buttonsList, axisList } from './controller';

const axisActions = axisList()
  .map(a => (
    {
      type: 'move', gesture: 'move', button: a.standard, text: `Move ${a.xbox360}`,
    }))

  .reduce((a, b) => a.concat(b), []);
const buttonActions = buttonsList()
  .map(b => [
    {
      type: 'press', gesture: 'press', button: b.standard, text: `Press ${b.xbox360}`,
    },
    {
      type: 'press', gesture: 'release', button: b.standard, text: `Release ${b.xbox360}`,
    },
  ])
  .reduce((a, b) => a.concat(b), []);

const nbButtons = axisList().length + (2 * buttonsList().length);

const actions = axisActions.concat(buttonActions)
  .map((a, index) => ({ ...a, id: index }))
  .map(a => [
    { ...a, gamepad: 1, text: `🎮❶ ${a.text}` },
    {
      ...a, id: a.id + nbButtons, gamepad: 2, text: `🎮❷ ${a.text}`,
    },
    {
      ...a, id: a.id + (nbButtons * 2), gamepad: 3, text: `🎮❸ ${a.text}`,
    },
    {
      ...a, id: a.id + (nbButtons * 3), gamepad: 4, text: `🎮❹ ${a.text}`,
    },
  ])
  .reduce((a, b) => a.concat(b), [])
  .sort((a, b) => a.id - b.id);

export const getAll = () => cloneDeep(actions);

export const get = id => cloneDeep(actions[id]);
