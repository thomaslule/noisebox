import { connectionsGetNextId, componentsGetAll } from '../reducer';

export const connectionAdd = () => (dispatch, getState) => {
  if (componentsGetAll(getState()).length > 0) {
    dispatch({
      type: 'CONNECTION_ADD',
      id: connectionsGetNextId(getState()),
      fromComponent: componentsGetAll(getState())[0].id,
      toComponent: 'master',
      toInput: 'main',
    });
  }
};

export const connectionDelete = id => ({
  type: 'CONNECTION_DELETE',
  id,
});

export const connectionChangeFrom = (id, fromComponent) => ({
  type: 'CONNECTION_CHANGE_FROM',
  id,
  fromComponent,
});

export const connectionChangeTo = (id, toComponent, toInput) => ({
  type: 'CONNECTION_CHANGE_TO',
  id,
  toComponent,
  toInput,
});
