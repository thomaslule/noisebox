import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer, { errorIsPresent } from './reducer';
import noise from './noise';
import actions from './actions';
import { unzip } from './zip';

export default () => {
  const store = createStore(reducer, applyMiddleware(thunk, logger));

  store.subscribe(() => {
    const state = store.getState();
    try {
      noise(state);
      if (errorIsPresent(state)) store.dispatch(actions.errorHide());
    } catch (e) {
      if (!errorIsPresent(state)) store.dispatch(actions.errorShow(e));
    }
  });

  if (window.location.hash.length > 1) {
    const stateJson = unzip(window.location.hash.substring(1));
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    store.dispatch(actions.stateJsonChange(stateJson));
  }

  noise(store.getState());

  return store;
};
