export default (state, action) => {
  switch (action.type) {
    case 'COMPONENTS_ADD':
      return {
        type: action.componentType, id: action.id, connectTo: 'master', params: { type: 'lowpass', frequency: 440 },
      };
    case 'FILTER_CHANGE_TYPE':
      return action.id === state.id
        ? { ...state, params: { ...state.params, type: action.value } }
        : state;
    case 'FILTER_CHANGE_FREQUENCY':
      return action.id === state.id
        ? { ...state, params: { ...state.params, frequency: action.value } }
        : state;
    case 'FILTER_CHANGE_CONNECT_TO':
      return action.id === state.id
        ? { ...state, connectTo: action.value }
        : state;
    default: return state;
  }
};
