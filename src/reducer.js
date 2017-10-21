import { combineReducers } from 'redux';
import muteAllReducer from './MuteAll/muteAllReducer';
import componentsReducer from './Components/componentsReducer';
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

export const connectionsGetAll = state =>
  fromConnections.connectionsGetAll(state.connections);
export const connectionsGetById = (state, id) =>
  fromConnections.connectionsGetById(state.connections, id);
export const connectionsGetMaxId = state =>
  fromConnections.connectionsGetMaxId(state.connections);
