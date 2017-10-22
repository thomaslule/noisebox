export default (state = { error: false }, action) => {
  if (action.type === 'ERROR_SHOW') {
    return {
      error: true,
      message: action.error,
    };
  }
  if (action.type === 'ERROR_HIDE') {
    return {
      error: false,
    };
  }
  return state;
};

export const errorIsPresent = state => state.error;
