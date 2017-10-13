import bindingReducer from './Binding/bindingReducer';

export default (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return [...state, bindingReducer(null, action)];
  }
  if (action.type === 'BINDING_DELETE') {
    return state.filter(b => b.id !== action.binding);
  }
  if (['BINDING_CHANGE_COMPONENT', 'BINDING_CHANGE_EFFECT', 'BINDING_CHANGE_PARAM', 'BINDING_DELETE'].includes(action.type)) {
    return state.map(b => (b.id === action.binding ? bindingReducer(b, action) : b));
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state.map(b => (b.component === action.component ? bindingReducer(b, action) : b));
  }
  return state;
};
