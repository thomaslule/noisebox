import connectionReducer, * as fromConnection from './connectionReducer';
import { setCurrentId } from './connectionsId';

export default (state = [], action) => {
  if (action.type === 'CONNECTION_ADD') {
    return [...state, connectionReducer(undefined, action)];
  }
  if (action.type === 'CONNECTION_DELETE') {
    return state.filter(c => (c.id !== action.connectionId));
  }
  if (action.type.startsWith('CONNECTION_')) {
    return state.map(c => (c.id === action.connectionId
      ? connectionReducer(c, action)
      : c));
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state.filter(c =>
      (c.fromComponentId !== action.component
        && c.toComponentId !== action.component));
  }
  if (action.type === 'STATE_JSON_CHANGED') {
    const maxId = state.map(b => b.id).reduce((a, b) => (a > b ? a : b), 0);
    setCurrentId(maxId);
    return state;
  }
  return state;
};

export const getConnections = state => state;
export const getConnectionById = (state, id) =>
  fromConnection.getConnection(state.find(c => c.id === id));
