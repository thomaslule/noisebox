export default (state, action) => {
  if (action.type === 'CLEAR_SETUP') {
    return { ...state, setup: undefined };
  }

  return state;
};
