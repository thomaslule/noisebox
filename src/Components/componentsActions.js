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
