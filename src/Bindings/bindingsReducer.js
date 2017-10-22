import { setCurrentId as setBindingCurrentId } from './bindingsId';
import { setCurrentId as setEffectCurrentId } from './effectsId';

const bindingReducer = (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return {
      id: action.bindingId,
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


export default (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return [...state, bindingReducer(null, action)];
  }
  if (action.type === 'BINDING_DELETE') {
    return state.filter(b => b.id !== action.bindingId);
  }
  if (action.type.startsWith('BINDING_')) {
    return state.map(b => (b.id === action.bindingId ? bindingReducer(b, action) : b));
  }
  if (action.type === 'STATE_JSON_CHANGED') {
    const maxBindingId = state.map(b => b.id).reduce((a, b) => (a > b ? a : b), 0);
    setBindingCurrentId(maxBindingId);
    const maxEffectsId = state
      .map(b => b.effects)
      .reduce((a, b) => a.concat(b), [])
      .map(e => e.id)
      .reduce((a, b) => (a > b ? a : b), 0);
    setEffectCurrentId(maxEffectsId);
    return state;
  }
  return state;
};
