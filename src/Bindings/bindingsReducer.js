import omit from 'lodash/omit';
import { getNextId } from '../util';

const bindingReducer = (state = {}, action) => {
  if (action.type === 'BINDING_ADD') {
    return {
      id: action.id,
      actions: [action.action],
      actionType: action.actionType,
    };
  }
  if (action.type === 'BINDING_ACTION_ADD') {
    return {
      ...state,
      actions: [...state.actions, action.action],
    };
  }
  if (action.type === 'BINDING_ACTION_DELETE') {
    return {
      ...state,
      actions: state.actions.filter(a => a !== action.action),
    };
  }
  return state;
};

export default (state = {}, action) => {
  if (action.type === 'BINDING_DELETE') {
    return omit(state, action.id);
  }
  if (action.type.startsWith('BINDING_')) {
    return {
      ...state,
      [action.id]: bindingReducer(state[action.id], action),
    };
  }
  return state;
};

export const bindingsGetAll = state => Object.values(state);

export const bindingsGetById = (state, id) => state[id];

export const bindingsGetNextId = state => getNextId(state);
