import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import connectionReducer, * as fromConnection from '../Connection/connectionReducer';

export default (state = {}, action) => {
  if (action.type === 'CONNECTION_DELETE') {
    return omit(state, action.id);
  }
  if (action.type.startsWith('CONNECTION_')) {
    return {
      ...state,
      [action.id]: connectionReducer(state[action.id], action),
    };
  }
  if (action.type === 'COMPONENT_DELETE') {
    return omitBy(state, c => c.componentFrom === action.id || c.componentTo === action.id);
  }
  return state;
};

export const connectionsGetAll = state =>
  Object.keys(state).map(id => fromConnection.connectionGetById(state[id]));

export const connectionsGetById = (state, id) =>
  fromConnection.connectionGetById(state[id]);

export const connectionsGetNextId = (state) => {
  const currentId = Math.max(Object.keys(state).map(id => Number(id))) || 0;
  return currentId + 1;
};
