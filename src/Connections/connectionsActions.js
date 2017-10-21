import { connectionsGetNextId } from '../reducer';

export const connectionAdd = () => (dispatch, getState) => {
  if (getState().components.length > 0) {
    dispatch({
      type: 'CONNECTION_ADD',
      id: connectionsGetNextId(getState()),
      fromComponent: getState().components[0].id,
      toComponent: 'master',
      toInput: 'main',
    });
  }
};

export const connectionDelete = id => ({
  type: 'CONNECTION_DELETE',
  id,
});
