import { buttonsList, axisList, triggersList } from '../controller';

const axisActions = axisList().map(a => ({ type: 'move', id: `move ${a}` }));
const triggersActions = triggersList().map(t => ({ type: 'move', id: `move ${t}` }));
const buttonActions = buttonsList()
  .map(b => [`press ${b}`, `release ${b}`])
  .reduce((a, b) => a.concat(b))
  .map(b => ({ type: 'press', id: b }));

export default axisActions.concat(triggersActions).concat(buttonActions);
