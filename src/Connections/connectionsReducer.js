import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';

const connectionReducer = (state = {}, action) => {
  if (action.type === 'CONNECTION_ADD') {
    return {
      id: action.id,
      fromComponent: action.fromComponent,
      toComponent: action.toComponent,
      toInput: action.toInput,
    };
  }
  if (action.type === 'CONNECTION_CHANGE_FROM') {
    return { ...state, fromComponent: action.fromComponent };
  }
  if (action.type === 'CONNECTION_CHANGE_TO') {
    return { ...state, toComponent: action.toComponent, toInput: action.toInput };
  }
  return state;
};

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

export const connectionsGetAll = state => Object.keys(state).map(id => state[id]);

export const connectionsGetById = (state, id) => state[id];

export const connectionsGetNextId = (state) => {
  const currentId = Math.max(Object.keys(state).map(id => Number(id))) || 0;
  return currentId + 1;
};
