import { combineReducers } from 'redux';
import muteAllReducer, * as fromMuteAll from './MuteAll/muteAllReducer';
import componentsReducer, * as fromComponents from './Components/componentsReducer';
import connectionsReducer, * as fromConnections from './Connections/connectionsReducer';
import bindingsReducer, * as fromBindings from './Bindings/bindingsReducer';
import effectsReducer, * as fromEffects from './Effect/effectsReducer';
import stateJson from './StateJson/stateJsonReducer';
import errorReducer, * as fromErrors from './Error/errorReducer';

const rest = combineReducers({
  muteAll: muteAllReducer,
  components: componentsReducer,
  connections: connectionsReducer,
  bindings: bindingsReducer,
  effects: effectsReducer,
  error: errorReducer,
});

export default (state, action) => rest(stateJson(state, action), action);

export const muteAllActive = state =>
  fromMuteAll.muteAllActive(state.muteAll);

export const componentsGetNextId = (state, type) =>
  fromComponents.componentsGetNextId(state.components, type);
export const componentsGetAll = state =>
  fromComponents.componentsGetAll(state.components);
export const componentsGetById = (state, id) =>
  fromComponents.componentsGetById(state.components, id);

export const bindingsGetAll = state =>
  fromBindings.bindingsGetAll(state.bindings);

export const bindingsGetById = (state, id) =>
  fromBindings.bindingsGetById(state.bindings, id);
export const bindingsGetNextId = state =>
  fromBindings.bindingsGetNextId(state.bindings);

export const connectionsGetAll = state =>
  fromConnections.connectionsGetAll(state.connections);
export const connectionsGetById = (state, id) =>
  fromConnections.connectionsGetById(state.connections, id);
export const connectionsGetByComponent = (state, component) =>
  fromConnections.connectionsGetByComponent(state.connections, component);
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

export const errorIsPresent = state =>
  fromErrors.errorIsPresent(state.error);
