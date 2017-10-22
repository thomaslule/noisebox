import { combineReducers } from 'redux';
import { reExport } from './util';
import muteAllReducer, * as fromMuteAll from './MuteAll/muteAllReducer';
import componentsReducer, * as fromComponents from './Components/componentsReducer';
import connectionsReducer, * as fromConnections from './Connections/connectionsReducer';
import bindingsReducer, * as fromBindings from './Bindings/bindingsReducer';
import effectsReducer, * as fromEffects from './Effect/effectsReducer';
import errorReducer, * as fromErrors from './Error/errorReducer';
import stateJson, * as fromStateJson from './StateJson/stateJsonReducer';

const rest = combineReducers({
  muteAll: muteAllReducer,
  components: componentsReducer,
  connections: connectionsReducer,
  bindings: bindingsReducer,
  effects: effectsReducer,
  error: errorReducer,
});

export default (state, action) => rest(stateJson(state, action), action);

export const muteAll = reExport(fromMuteAll, 'muteAll');
export const components = reExport(fromComponents, 'components');
export const bindings = reExport(fromBindings, 'bindings');
export const connections = reExport(fromConnections, 'connections');
export const effects = reExport(fromEffects, 'effects');
export const error = reExport(fromErrors, 'error');

export const stateJsonGet = state =>
  fromStateJson.stateJsonGet(state);
