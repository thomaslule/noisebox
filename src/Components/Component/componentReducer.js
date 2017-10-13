import clone from 'clone';
import { get } from '../../componentsDictionary';

export default (state, action) => {
  if (action.type === 'COMPONENT_ADD') {
    return {
      id: action.id,
      type: action.componentType,
      params: get(action.componentType).defaultParams,
    };
  }
  if (action.type === 'COMPONENT_CHANGE_PARAM') {
    const cloned = clone(state);
    cloned.params[action.param] = action.value;
    return cloned;
  }
  return state;
};
