import oscillatorControlReducer from './OscillatorControl/oscillatorControlReducer';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_BINDING':
      return { button: action.button, component: 'none', effect: oscillatorControlReducer(undefined, action) };
    case 'BINDING_CHANGE_COMPONENT':
      return (action.button === state.button) ? { ...state, component: action.component, effect: oscillatorControlReducer(undefined, action) } : state;
    case 'OSCILLATOR_CONTROL_CHANGE_TYPE':
    case 'OSCILLATOR_CONTROL_CHANGE_PARAMS':
      return (action.button === state.button) ? { ...state, effect: oscillatorControlReducer(state.effect, action) } : state;
    default: return state;
  }
};
