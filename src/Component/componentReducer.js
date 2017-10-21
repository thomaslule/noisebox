import cloneDeep from 'lodash/cloneDeep';

export default (state, action) => {
  if (action.type === 'COMPONENT_ADD') {
    return {
      id: action.id,
      typeId: action.componentType,
      params: action.params,
    };
  }
  if (action.type === 'COMPONENT_CHANGE_PARAM') {
    const cloned = cloneDeep(state);
    cloned.params[action.param] = action.value;
    return cloned;
  }
  return state;
};

export const componentGet = state => state;
