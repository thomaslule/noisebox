import { combineReducers } from 'redux';
import muteAllReducer from './MuteAll/muteAllReducer';
import componentsReducer, * as fromComponents from './Components/componentsReducer';
import connectionsReducer, * as fromConnections from './Connections/connectionsReducer';
import bindingsReducer from './Bindings/bindingsReducer';
import effectsReducer, * as fromEffects from './Effect/effectsReducer';
import stateJson from './StateJson/stateJsonReducer';
import errorReducer from './Error/errorReducer';

const rest = combineReducers({
  muteAll: muteAllReducer,
  components: componentsReducer,
  connections: connectionsReducer,
  bindings: bindingsReducer,
  effects: effectsReducer,
  error: errorReducer,
});

export default (state, action) => rest(stateJson(state, action), action);

export const componentsGetNextId = (state, type) =>
  fromComponents.componentsGetNextId(state.components, type);
export const componentsGetAll = state =>
  fromComponents.componentsGetAll(state.components);
export const componentsGetById = (state, id) =>
  fromComponents.componentsGetById(state.components, id);

export const connectionsGetAll = state =>
  fromConnections.connectionsGetAll(state.connections);
export const connectionsGetById = (state, id) =>
  fromConnections.connectionsGetById(state.connections, id);
export const connectionsGetNextId = state =>
  fromConnections.connectionsGetNextId(state.connections);

export const effectGetById = (state, id) =>
  fromEffects.effectGetById(state.effects, id);
export const effectsGetAll = state =>
  fromEffects.effectsGetAll(state.effects);
export const effectsGetByComponent = (state, component) =>
  fromEffects.effectsGetByComponent(state.effects, component);
export const effectsGetByBinding = (state, component) =>
  fromEffects.effectsGetByBinding(state.effects, component);
export const effectGetNextId = state =>
  fromEffects.effectGetNextId(state.effects);
