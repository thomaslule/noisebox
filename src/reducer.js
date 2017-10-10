import { combineReducers } from 'redux';
import componentsReducer from './Components/componentsReducer';
import bindingsReducer from './Bindings/bindingsReducer';
import stateJson from './StateJson/stateJsonReducer';

const rest = combineReducers({
  components: componentsReducer,
  bindings: bindingsReducer,
});

export default (state, action) => rest(stateJson(state, action), action);
