import clone from 'clone';
import { get } from './effectsDictionary';

export default (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return {
      id: action.id,
      action: action.action,
      component: 'none',
      effect: 'none',
      params: {},
    };
  }
  if (action.type === 'BINDING_CHANGE_COMPONENT') {
    return {
      ...state,
      component: action.component,
      effect: 'none',
      params: {},
    };
  }
  if (action.type === 'BINDING_CHANGE_EFFECT') {
    return {
      ...state,
      effect: action.effect,
      params: get(action.effect).initParams,
    };
  }
  if (action.type === 'BINDING_CHANGE_PARAM') {
    const newState = clone(state);
    newState.params[action.param] = action.value;
    return newState;
  }
  if (action.type === 'COMPONENT_DELETE') {
    return {
      ...state,
      component: 'none',
      effect: 'none',
      params: {},
    };
  }
  return state;
};
