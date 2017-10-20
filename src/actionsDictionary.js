import clone from 'clone';
import { buttonsList, axisList } from './controller';

const axisActions = axisList().map(a => ({ type: 'move', id: `move ${a.standard}`, text: `move ${a.xbox360}` }));
const buttonActions = buttonsList()
  .map(b => [
    { type: 'press', id: `press ${b.standard}`, text: `press ${b.xbox360}` },
    { type: 'press', id: `release ${b.standard}`, text: `release ${b.xbox360}` },
  ])
  .reduce((a, b) => a.concat(b), []);

const actions = axisActions.concat(buttonActions);

export const getAll = () => clone(actions);

export const get = id => actions.find(a => a.id === id);
