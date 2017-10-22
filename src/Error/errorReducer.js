export default (state = null, action) => {
  if (action.type === 'ERROR_SHOW') {
    return action.error;
  }
  if (action.type === 'ERROR_HIDE') {
    return null;
  }
  return state;
};

export const errorIsPresent = state => state !== null;
