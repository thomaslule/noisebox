import { combineReducers } from 'redux';
import componentsReducer from './Components/componentsReducer';
import gamepadMappingReducer from './GamepadMapping/gamepadMappingReducer';
import stateJson from './StateJson/stateJsonReducer';

const rest = combineReducers({
  components: componentsReducer,
  gamepadMapping: gamepadMappingReducer,
});

export default (state, action) => rest(stateJson(state, action), action);
