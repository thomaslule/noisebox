export default (state = null, action) => {
  if (action.type === 'ERROR') {
    return action.error;
  }
  if (action.type === 'NO_ERROR') {
    return null;
  }
  return state;
};
