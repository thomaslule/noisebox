import clone from 'clone';

export default (state, action) => {
  if (action.type === 'COMPONENT_ADD') {
    return {
      id: action.id,
      typeId: action.componentType,
      params: action.params,
    };
  }
  if (action.type === 'COMPONENT_CHANGE_PARAM') {
    const cloned = clone(state);
    cloned.params[action.param] = action.value;
    return cloned;
  }
  return state;
};
