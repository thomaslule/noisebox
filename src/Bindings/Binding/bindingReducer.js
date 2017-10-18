import effectReducer from './Effect/effectReducer';

export default (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return {
      id: action.id,
      actions: [action.action],
      actionType: action.actionType,
      effects: [],
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
  if (action.type === 'BINDING_EFFECT_ADD') {
    return {
      ...state,
      effects: [...state.effects, effectReducer(null, action)],
    };
  }
  if (action.type === 'BINDING_EFFECT_DELETE') {
    return {
      ...state,
      effects: state.effects.filter(e => e.id !== action.effectId),
    };
  }
  if (action.type.startsWith('BINDING_EFFECT_')) {
    return {
      ...state,
      effects: state.effects.map(e => (e.id === action.effectId ? effectReducer(e, action) : e)),
    };
  }
  return state;
};
