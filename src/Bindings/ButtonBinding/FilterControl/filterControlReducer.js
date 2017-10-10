export default (state, action) => {
  if (action.type === 'FILTER_CONTROL_CHANGE_TYPE') {
    let params;
    if (action.value === 'none') params = {};
    if (action.value === 'set_frequency') params = { frequency: 440 };
    if (action.value === 'move_frequency') params = { sensibility: 100 };
    return {
      type: action.value,
      params,
    };
  }
  if (action.type === 'FILTER_CONTROL_CHANGE_TYPE'
    || action.type === 'FILTER_CONTROL_CHANGE_PARAMS') {
    return { ...state, params: action.params };
  }
  return state;
};
