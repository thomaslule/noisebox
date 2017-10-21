import { componentsGetNextId } from '../reducer';

export const componentAdd = componentTypeId => (dispatch, getState) => {
  dispatch({
    type: 'COMPONENT_ADD',
    componentId: componentsGetNextId(getState(), componentTypeId),
    componentTypeId,
  });
};
