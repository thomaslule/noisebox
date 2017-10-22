import { componentsGetNextId, effectsGetByComponent } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

export const componentAdd = componentType => (dispatch, getState) => {
  dispatch({
    type: 'COMPONENT_ADD',
    id: componentsGetNextId(getState(), componentType),
    componentType,
    params: get(componentType).defaultParams,
  });
};

export const componentDelete = id => (dispatch, getState) => {
  effectsGetByComponent(getState(), id).forEach((effect) => {
    dispatch(actions.effectDelete(effect.id));
  });
  dispatch({
    type: 'COMPONENT_DELETE',
    id,
  });
};

export const componentChangeParam = (id, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  id,
  param,
  value,
});
