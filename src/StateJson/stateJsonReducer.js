export default (state, action) => {
  if (action.type === 'STATE_JSON_CHANGED') return JSON.parse(action.value);
  return state;
};
