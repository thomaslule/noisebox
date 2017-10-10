import oscillatorReducer from './Oscillator/oscillatorReducer';

export default (state = [], action) => {
  switch (action.type) {
    case 'COMPONENTS_ADD':
      return [...state, oscillatorReducer(undefined, action)];
    case 'COMPONENT_DELETE':
      return state.filter(c => c.id !== action.id);
    case 'OSCILLATOR_CHANGE_TYPE':
    case 'OSCILLATOR_CHANGE_FREQUENCY':
    case 'OSCILLATOR_CHANGE_TO_MASTER':
      return state.map(o => oscillatorReducer(o, action));
    default: return state;
  }
};
