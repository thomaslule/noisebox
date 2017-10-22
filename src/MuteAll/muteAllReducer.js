export default (state = false, action) => {
  if (action.type === 'MUTE_ALL_SWITCH') {
    return !state;
  }
  return state;
};

export const isActive = state => state;
