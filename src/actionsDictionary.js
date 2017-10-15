import { buttonsList, axisList } from './controller';

const axisActions = axisList().map(a => ({ type: 'move', id: `move ${a}` }));
const buttonActions = buttonsList()
  .map(b => [`press ${b}`, `release ${b}`])
  .reduce((a, b) => a.concat(b))
  .map(b => ({ type: 'press', id: b }));

export default axisActions.concat(buttonActions);
