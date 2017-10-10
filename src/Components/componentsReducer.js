import oscillatorReducer from './Oscillator/oscillatorReducer';
import filterReducer from './Filter/filterReducer';

export default (state = [], action) => {
  if (action.type === 'COMPONENTS_ADD') {
    let newComponent;
    if (action.componentType === 'oscillator') {
      newComponent = oscillatorReducer(undefined, action);
    }
    if (action.componentType === 'filter') {
      newComponent = filterReducer(undefined, action);
    }
    return [...state, newComponent];
  }
  if (action.type === 'COMPONENT_DELETE') {
    return state.filter(c => c.id !== action.id);
  }
  if (['OSCILLATOR_CHANGE_TYPE', 'OSCILLATOR_CHANGE_FREQUENCY', 'OSCILLATOR_CHANGE_CONNECT_TO'].includes(action.type)) {
    return state.map(o => oscillatorReducer(o, action));
  }
  if (['FILTER_CHANGE_TYPE', 'FILTER_CHANGE_FREQUENCY', 'FILTER_CHANGE_CONNECT_TO'].includes(action.type)) {
    return state.map(o => filterReducer(o, action));
  }
  return state;
};
