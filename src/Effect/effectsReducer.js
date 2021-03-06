import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import { getNextId } from '../util';
import { get } from '../effectTypesDictionary';

const effectReducer = (state = {}, action) => {
  if (action.type === 'EFFECT_ADD') {
    return {
      id: action.id,
      binding: action.binding,
      actionType: action.actionType,
      component: 'none',
      effectType: 'none',
      params: [],
    };
  }
  if (action.type === 'EFFECT_CHANGE_COMPONENT') {
    return {
      ...state,
      component: action.component,
      effectType: 'none',
      params: [],
    };
  }
  if (action.type === 'EFFECT_CHANGE_EFFECT_TYPE') {
    return {
      ...state,
      effectType: action.effectType,
      params: get(action.effectType).initParams,
    };
  }
  if (action.type === 'EFFECT_CHANGE_PARAM') {
    const newState = cloneDeep(state);
    newState.params[action.param] = action.value;
    return newState;
  }
  return state;
};

export default (state = {}, action) => {
  if (action.type === 'EFFECT_DELETE') {
    return omit(state, action.id);
  }
  if (action.type.startsWith('EFFECT_')) {
    return {
      ...state,
      [action.id]: effectReducer(state[action.id], action),
    };
  }
  return state;
};

export const getById = (state, id) => state[id];

export const getAll = state =>
  Object.values(state);

export const getByComponent = (state, component) =>
  Object.values(state).filter(e => e.component === component);

export const getByBinding = (state, binding) =>
  Object.values(state).filter(e => e.binding === binding);

export const nextId = state => getNextId(state);
