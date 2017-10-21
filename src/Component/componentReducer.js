import clone from 'clone';
import { get } from '../componentTypesDictionary';

export default (state, action) => {
  if (action.type === 'COMPONENT_ADD') {
    return {
      id: action.componentId,
      typeId: action.componentTypeId,
      params: get(action.componentTypeId).defaultParams,
    };
  }
  if (action.type === 'COMPONENT_CHANGE_PARAM') {
    const cloned = clone(state);
    cloned.params[action.param] = action.value;
    return cloned;
  }
  return state;
};
