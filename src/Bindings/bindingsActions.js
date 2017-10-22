import { get } from '../actionsDictionary';
import { bindingsGetNextId, effectsGetByBinding } from '../reducer';
import actions from '../actions';

export const bindingAdd = action => (dispatch, getState) => {
  dispatch({
    type: 'BINDING_ADD',
    id: bindingsGetNextId(getState()),
    action,
    actionType: get(action).type,
  });
};

export const bindingActionAdd = (id, action) => ({
  type: 'BINDING_ACTION_ADD',
  id,
  action,
});

export const bindingActionDelete = (id, action) => ({
  type: 'BINDING_ACTION_DELETE',
  id,
  action,
});

export const bindingDelete = id => (dispatch, getState) => {
  effectsGetByBinding(getState(), id).forEach((e) => {
    dispatch(actions.effectDelete(e.id));
  });
  dispatch({
    type: 'BINDING_DELETE',
    id,
  });
};
