import oscillatorReducer from './Oscillator/oscillatorReducer';

export default (state = [], action) => {
  switch (action.type) {
    case 'COMPONENTS_ADD':
      return [...state, { type: 'oscillator', id: action.id, params: oscillatorReducer(undefined, action) }];
    case 'OSCILLATOR_CHANGE_TYPE':
    case 'OSCILLATOR_CHANGE_FREQUENCY':
    case 'OSCILLATOR_CHANGE_TO_MASTER':
      return state.map(o => ({ ...o, params: oscillatorReducer(o.params, action) }));
    default: return state;
  }
};
