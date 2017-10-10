import buttonBindingReducer from './ButtonBinding/buttonBindingReducer';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_BINDING':
      return [...state, buttonBindingReducer(undefined, action)];
    case 'DELETE_BINDING':
      return state.filter(b => b.button !== action.button);
    case 'BINDING_CHANGE_COMPONENT':
    case 'OSCILLATOR_CONTROL_CHANGE_TYPE':
    case 'OSCILLATOR_CONTROL_CHANGE_PARAMS':
    case 'FILTER_CONTROL_CHANGE_TYPE':
    case 'FILTER_CONTROL_CHANGE_PARAMS':
      return state.map(binding => buttonBindingReducer(binding, action));
    default: return state;
  }
};
