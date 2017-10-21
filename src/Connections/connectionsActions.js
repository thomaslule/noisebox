import { connectionsGetMaxId } from '../reducer';

export const connectionsAdd = () => (dispatch, getState) => {
  if (getState().components.length > 0) {
    dispatch({
      type: 'CONNECTION_ADD',
      id: connectionsGetMaxId(getState()) + 1,
      fromComponent: getState().components[0].id,
      toComponent: 'master',
      toInput: 'main',
    });
  }
};

export const connectionsDelete = id => ({
  type: 'CONNECTION_DELETE',
  id,
});
