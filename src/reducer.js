import { combineReducers } from 'redux';
import componentsReducer from './Components/componentsReducer';
import gamepadMappingReducer from './GamepadMapping/gamepadMappingReducer';

export default combineReducers({
  components: componentsReducer,
  gamepadMapping: gamepadMappingReducer,
});
