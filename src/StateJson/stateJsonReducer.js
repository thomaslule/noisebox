export default (state, action) => {
  if (action.type === 'STATE_JSON_CHANGE') return JSON.parse(action.stateJson);
  return state;
};

export const stateJsonGet = state => state;
