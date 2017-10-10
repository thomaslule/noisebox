export default (state = false, action) => {
  if (action.type === 'SWITCH_MUTE_ALL') {
    return !state;
  }
  return state;
};
