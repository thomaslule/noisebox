import { componentsGetNextId } from '../reducer';
import { get } from '../componentTypesDictionary';

export const componentAdd = componentType => (dispatch, getState) => {
  dispatch({
    type: 'COMPONENT_ADD',
    id: componentsGetNextId(getState(), componentType),
    componentType,
    params: get(componentType).defaultParams,
  });
};

export const componentDelete = id => ({
  type: 'COMPONENT_DELETE',
  id,
});

export const componentChangeParam = (id, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  id,
  param,
  value,
});
