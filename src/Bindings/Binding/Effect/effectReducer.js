import clone from 'clone';
import { get } from '../../../effectTypesDictionary';

export default (state = {}, action) => {
  if (action.type === 'BINDING_EFFECT_ADD') {
    return {
      id: action.effectId,
      componentId: 'none',
      effectTypeId: 'none',
      params: [],
    };
  }
  if (action.type === 'BINDING_EFFECT_CHANGE_COMPONENT_ID') {
    return {
      ...state,
      componentId: action.componentId,
      effectTypeId: 'none',
      params: [],
    };
  }
  if (action.type === 'BINDING_EFFECT_CHANGE_EFFECT_TYPE') {
    return {
      ...state,
      effectTypeId: action.effectTypeId,
      params: get(action.effectTypeId).initParams,
    };
  }
  if (action.type === 'BINDING_EFFECT_CHANGE_PARAM') {
    const newState = clone(state);
    newState.params[action.param] = action.value;
    return newState;
  }
  return state;
};
