export default (state, action) => {
  switch (action.type) {
    case 'ADD_BINDING':
    case 'BINDING_CHANGE_COMPONENT':
      return { type: 'none', params: {} };
    case 'OSCILLATOR_CONTROL_CHANGE_TYPE':
      return { type: action.value, params: action.value === 'none' ? {} : { frequency: 440 } };
    case 'OSCILLATOR_CONTROL_CHANGE_SET_FREQUENCY_PARAMS':
      return { ...state, params: action.params };
    default: return state;
  }
};
