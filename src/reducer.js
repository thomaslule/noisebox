import { combineReducers } from 'redux';
import componentsReducer from './Components/componentsReducer';

export default combineReducers({
  components: componentsReducer,
});
