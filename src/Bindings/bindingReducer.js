export default (state = [], action) => {
  if (action.type === 'BINDING_ADD') {
    return {
      id: action.bindingId,
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
  if (action.type === 'EFFECT_ADD') {
    return {
      ...state,
      effects: [...state.effects, action.id],
    };
  }
  if (action.type === 'EFFECT_DELETE') {
    return {
      ...state,
      effects: state.effects.filter(e => e !== action.id),
    };
  }
  if (action.type === 'COMPONENT_DELETE') {
    return {
      ...state,
      effects: state.effects.filter(e => e.componentId === action.componentId),
    };
  }
  return state;
};
