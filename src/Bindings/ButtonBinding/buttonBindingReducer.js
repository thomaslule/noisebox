import oscillatorControlReducer from './OscillatorControl/oscillatorControlReducer';
import filterControlReducer from './FilterControl/filterControlReducer';

export default (state, action) => {
  if (action.type === 'ADD_BINDING') {
    return { button: action.button, component: 'none', effect: { type: 'none', params: {} } };
  }
  if (action.type === 'BINDING_CHANGE_COMPONENT') {
    return (action.button === state.button) ? { ...state, component: action.component, effect: { type: 'none', params: {} } } : state;
  }
  if (['OSCILLATOR_CONTROL_CHANGE_TYPE', 'OSCILLATOR_CONTROL_CHANGE_PARAMS'].includes(action.type)) {
    return (action.button === state.button) ? { ...state, effect: oscillatorControlReducer(state.effect, action) } : state;
  }
  if (['FILTER_CONTROL_CHANGE_TYPE', 'FILTER_CONTROL_CHANGE_PARAMS'].includes(action.type)) {
    return (action.button === state.button) ? { ...state, effect: filterControlReducer(state.effect, action) } : state;
  }
  return state;
};
