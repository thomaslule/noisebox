import { combineReducers } from 'redux';
import muteAllReducer from './MuteAll/muteAllReducer';
import componentsReducer, * as fromComponents from './Components/componentsReducer';
import connectionsReducer, * as fromConnections from './Connections/connectionsReducer';
import bindingsReducer from './Bindings/bindingsReducer';
import stateJson from './StateJson/stateJsonReducer';
import errorReducer from './Error/errorReducer';

const rest = combineReducers({
  muteAll: muteAllReducer,
  components: componentsReducer,
  connections: connectionsReducer,
  bindings: bindingsReducer,
  error: errorReducer,
});

export default (state, action) => rest(stateJson(state, action), action);

export const componentsGetNextId = (state, type) =>
  fromComponents.componentsGetNextId(state.components, type);
export const connectionsGetAll = state =>
  fromConnections.connectionsGetAll(state.connections);
export const connectionsGetById = (state, id) =>
  fromConnections.connectionsGetById(state.connections, id);
export const connectionsGetNextId = state =>
  fromConnections.connectionsGetNextId(state.connections);
