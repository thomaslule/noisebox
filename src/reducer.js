import { combineReducers } from 'redux';
import { reExport } from './util';
import muteAllReducer, * as fromMuteAll from './MuteAll/muteAllReducer';
import componentsReducer, * as fromComponents from './Components/componentsReducer';
import connectionsReducer, * as fromConnections from './Connections/connectionsReducer';
import bindingsReducer, * as fromBindings from './Bindings/bindingsReducer';
import effectsReducer, * as fromEffects from './Effect/effectsReducer';
import errorReducer, * as fromErrors from './Error/errorReducer';
import setupJsonReducer, * as fromSetupJson from './SetupJson/setupJsonReducer';
import gamepadsReducer, * as fromGamepads from './Gamepads/gamepadsReducer';
import deadzoneReducer, * as fromDeadzone from './Deadzone/deadzoneReducer';

const setupReducer = combineReducers({
  components: componentsReducer,
  connections: connectionsReducer,
  bindings: bindingsReducer,
  effects: effectsReducer,
});

const setupWithJsonReducer = (state, action) =>
  setupReducer(setupJsonReducer(state, action), action);

export default combineReducers({
  setup: setupWithJsonReducer,
  muteAll: muteAllReducer,
  error: errorReducer,
  gamepads: gamepadsReducer,
  deadzone: deadzoneReducer,
});

export const setupJson = reExport(fromSetupJson, 'setup');
export const components = reExport(fromComponents, 'setup', 'components');
export const bindings = reExport(fromBindings, 'setup', 'bindings');
export const connections = reExport(fromConnections, 'setup', 'connections');
export const effects = reExport(fromEffects, 'setup', 'effects');
export const muteAll = reExport(fromMuteAll, 'muteAll');
export const error = reExport(fromErrors, 'error');
export const gamepads = reExport(fromGamepads, 'gamepads');
export const deadzone = reExport(fromDeadzone, 'deadzone');
