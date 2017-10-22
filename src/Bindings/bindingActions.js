import { effectsGetByBinding } from '../reducer';
import actions from '../actions';

export const addAction = (bindingId, action) => ({
  type: 'BINDING_ACTION_ADD',
  bindingId,
  action,
});

export const deleteAction = (bindingId, action) => ({
  type: 'BINDING_ACTION_DELETE',
  bindingId,
  action,
});

export const remove = bindingId => (dispatch, getState) => {
  effectsGetByBinding(getState(), bindingId).forEach((e) => {
    dispatch(actions.effectDelete(e.id));
  });
  dispatch({
    type: 'BINDING_DELETE',
    bindingId,
  });
};
