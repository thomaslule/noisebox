import componentReducer from './Component/componentReducer';
import { setCurrentId } from './componentsId';

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
  if (action.type === 'STATE_JSON_CHANGED') {
    state.map(c => c.typeId).forEach((typeId) => {
      const maxId = state
        .filter(c => c.typeId === typeId)
        .map(c => Number(c.id.split(' ').pop()))
        .reduce((a, b) => (a > b ? a : b), 0);
      setCurrentId(typeId, maxId);
    });
    return state;
  }
  return state;
};
