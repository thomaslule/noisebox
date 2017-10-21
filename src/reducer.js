import { combineReducers } from 'redux';
import muteAllReducer from './MuteAll/muteAllReducer';
import componentsReducer from './Components/componentsReducer';
import connectionsReducer from './Connections/connectionsReducer';
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
