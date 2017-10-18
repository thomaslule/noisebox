import { setCurrentId } from './connectionsId';

export default (state = [], action) => {
  if (action.type === 'CONNECTION_ADD') {
    return [...state, {
      id: action.connectionId,
      fromComponentId: action.fromComponentId,
      toComponentId: action.toComponentId,
      toInput: action.toInput,
    }];
  }
  if (action.type === 'CONNECTION_CHANGE_FROM') {
    return state.map(c => (c.id === action.connectionId
      ? { ...c, fromComponentId: action.fromComponentId }
      : c));
  }
  if (action.type === 'CONNECTION_CHANGE_TO') {
    return state.map(c => (c.id === action.connectionId
      ? { ...c, toComponentId: action.toComponentId, toInput: action.toInput }
      : c));
  }
  if (action.type === 'CONNECTION_DELETE') {
    return state.filter(c => (c.id !== action.connectionId));
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state
      .filter(c => (c.fromComponentId !== action.component && c.toComponentId !== action.component));
  }
  if (action.type === 'STATE_JSON_CHANGED') {
    const maxId = state.map(b => b.id).reduce((a, b) => (a > b ? a : b), 0);
    setCurrentId(maxId);
    return state;
  }
  return state;
};
