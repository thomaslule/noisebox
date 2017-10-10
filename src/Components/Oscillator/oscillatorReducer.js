export default (state, action) => {
  switch (action.type) {
    case 'COMPONENTS_ADD':
      return { type: 'sine', frequency: 440, toMaster: false };
    case 'OSCILLATOR_CHANGE_TYPE':
      return { ...state, type: action.value };
    case 'OSCILLATOR_CHANGE_FREQUENCY':
      return { ...state, frequency: action.value };
    case 'OSCILLATOR_CHANGE_TO_MASTER':
      return { ...state, toMaster: action.value };
    default: return state;
  }
};
