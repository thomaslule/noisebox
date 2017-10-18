import clone from 'clone';
import { get } from '../../../effectsDictionary';

export default (state = {}, action) => {
  if (action.type === 'BINDING_EFFECT_ADD') {
    return {
      id: action.id,
      componentId: action.component,
      effectId: 'none',
      params: [],
    };
  }
  if (action.type === 'BINDING_EFFECT_CHANGE_EFFECT') {
    return {
      ...state,
      effectId: action.newEffect,
      params: get(action.newEffect).initParams,
    };
  }
  if (action.type === 'BINDING_EFFECT_CHANGE_PARAM') {
    const newState = clone(state);
    newState.params[action.param] = action.value;
    return newState;
  }
  return state;
};
