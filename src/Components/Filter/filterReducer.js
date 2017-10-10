export default (state, action) => {
  switch (action.type) {
    case 'COMPONENTS_ADD':
      return { type: action.componentType, id: action.id, params: { type: 'lowpass', frequency: 440, toMaster: false } };
    case 'FILTER_CHANGE_TYPE':
      return action.id === state.id
        ? { ...state, params: { ...state.params, type: action.value } }
        : state;
    case 'FILTER_CHANGE_FREQUENCY':
      return action.id === state.id
        ? { ...state, params: { ...state.params, frequency: action.value } }
        : state;
    case 'FILTER_CHANGE_TO_MASTER':
      return action.id === state.id
        ? { ...state, params: { ...state.params, toMaster: action.value } }
        : state;
    default: return state;
  }
};
