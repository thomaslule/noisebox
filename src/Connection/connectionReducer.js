export default (state = {}, action) => {
  if (action.type === 'CONNECTION_ADD') {
    return {
      id: action.id,
      fromComponent: action.fromComponent,
      toComponent: action.toComponent,
      toInput: action.toInput,
    };
  }
  if (action.type === 'CONNECTION_CHANGE_FROM') {
    return { ...state, fromComponent: action.fromComponent };
  }
  if (action.type === 'CONNECTION_CHANGE_TO') {
    return { ...state, toComponent: action.toComponent, toInput: action.toInput };
  }
  return state;
};

export const connectionGetById = state => state;
