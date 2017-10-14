import { setCurrentId } from './connectionsId';

export default (state = [], action) => {
  if (action.type === 'CONNECTION_ADD') {
    return [...state, {
      id: action.id,
      fromComponent: action.fromComponent,
      toComponent: action.toComponent,
      toInput: action.toInput,
    }];
  }
  if (action.type === 'CONNECTION_CHANGE_FROM') {
    return state.map(c => (c.id === action.connectionId
      ? { ...c, fromComponent: action.fromComponent }
      : c));
  }
  if (action.type === 'CONNECTION_CHANGE_TO') {
    return state.map(c => (c.id === action.connectionId
      ? { ...c, toComponent: action.toComponent, toInput: action.toInput }
      : c));
  }
  if (action.type === 'CONNECTION_DELETE') {
    return state.filter(c => (c.id !== action.connectionId));
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state
      .filter(c => (c.fromComponent !== action.component && c.toComponent !== action.component));
  }
  if (action.type === 'STATE_JSON_CHANGED') {
    const maxId = state.map(b => b.id).reduce((a, b) => (a > b ? a : b), 0);
    setCurrentId(maxId);
    return state;
  }
  return state;
};
