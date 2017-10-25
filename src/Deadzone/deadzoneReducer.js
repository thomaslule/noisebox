export default (state = 0.1, action) => {
  if (action.type === 'DEADZONE_CHANGE') {
    return action.value;
  }
  return state;
};

export const get = state => state;
