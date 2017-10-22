import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';

const componentReducer = (state, action) => {
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

export default (state = [], action) => {
  if (action.type === 'COMPONENT_DELETE') {
    return omit(state, action.id);
  }
  if (action.type.startsWith('COMPONENT_')) {
    return {
      ...state,
      [action.id]: componentReducer(state[action.id], action),
    };
  }
  return state;
};

export const componentsGetAll = state => Object.keys(state).map(id => state[id]);

export const componentsGetById = (state, id) => state[id];

export const componentsGetNextId = (state, type) => {
  const ids = componentsGetAll(state)
    .filter(c => c.typeId === type)
    .map(c => Number(c.id.split(' ').pop()));
  const currentId = ids.length > 0 ? Math.max(...ids) : 0;
  return `${type} ${currentId + 1}`;
};
