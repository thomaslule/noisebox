import componentReducer from './Component/componentReducer';

export default (state = [], action) => {
  if (action.type === 'COMPONENT_ADD') {
    return [...state, componentReducer(null, action)];
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state.filter(c => c.id !== action.component);
  }
  if (['COMPONENT_CHANGE_PARAM', 'COMPONENT_CHANGE_CONNECT_TO'].includes(action.type)) {
    return state.map(c => (c.id === action.component ? componentReducer(c, action) : c));
  }
  return state;
};
