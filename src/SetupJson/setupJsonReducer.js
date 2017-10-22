export default (state, action) => {
  if (action.type === 'SETUP_JSON_CHANGE') return JSON.parse(action.stateJson);
  return state;
};

export const get = state => state;
