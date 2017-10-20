export default (state = {}, action) => {
  if (action.type === 'CONNECTION_ADD') {
    return {
      id: action.connectionId,
      fromComponentId: action.fromComponentId,
      toComponentId: action.toComponentId,
      toInput: action.toInput,
    };
  }
  if (action.type === 'CONNECTION_CHANGE_FROM') {
    return { ...state, fromComponentId: action.fromComponentId };
  }
  if (action.type === 'CONNECTION_CHANGE_TO') {
    return { ...state, toComponentId: action.toComponentId, toInput: action.toInput };
  }
  return state;
};

export const getConnection = state => state;
