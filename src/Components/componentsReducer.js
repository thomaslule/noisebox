import componentReducer from '../Component/componentReducer';

export default (state = [], action) => {
  if (action.type === 'COMPONENT_ADD') {
    return [...state, componentReducer(null, action)];
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state.filter(c => c.id !== action.componentId);
  }
  if (['COMPONENT_CHANGE_PARAM'].includes(action.type)) {
    return state.map(c => (c.id === action.componentId ? componentReducer(c, action) : c));
  }
  return state;
};

export const componentsGetNextId = (state, type) => {
  const currentId = Math.max(state
    .filter(c => c.typeId === type)
    .map(c => Number(c.id.split(' ').pop())))
    || 0;
  return `${type} ${currentId + 1}`;
};
