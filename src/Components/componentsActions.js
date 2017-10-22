import { components, effects, connections } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

export const componentAdd = componentType => (dispatch, getState) => {
  dispatch({
    type: 'COMPONENT_ADD',
    id: components.nextId(getState(), componentType),
    componentType,
    params: get(componentType).defaultParams,
  });
};

export const componentDelete = id => (dispatch, getState) => {
  effects.getByComponent(getState(), id).forEach((effect) => {
    dispatch(actions.effectDelete(effect.id));
  });
  connections.getByComponent(getState(), id).forEach((connection) => {
    dispatch(actions.connectionDelete(connection.id));
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
