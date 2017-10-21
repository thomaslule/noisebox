import omit from 'lodash/omit';
import componentReducer, * as fromComponent from '../Component/componentReducer';

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

export const componentsGetAll = state =>
  Object.keys(state).map(id => fromComponent.componentGet(state[id]));

export const componentsGetById = (state, id) =>
  fromComponent.componentGet(state[id]);

export const componentsGetNextId = (state, type) => {
  const currentId = Math.max(state
    .filter(c => c.typeId === type)
    .map(c => Number(c.id.split(' ').pop())))
    || 0;
  return `${type} ${currentId + 1}`;
};
