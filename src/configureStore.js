import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import noise from './noise';
import { errorAction, noErrorAction } from './Error/errorActions';
import { changeStateJson } from './StateJson/stateJsonActions';
import { unzip } from './zip';

export default () => {
  const store = createStore(reducer, applyMiddleware(logger));

  store.subscribe(() => {
    const state = store.getState();
    try {
      noise(state);
      if (state.error) store.dispatch(noErrorAction());
    } catch (e) {
      if (!state.error) store.dispatch(errorAction(e));
    }
  });

  if (window.location.hash.length > 1) {
    const stateJson = unzip(window.location.hash.substring(1));
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    store.dispatch(changeStateJson(stateJson));
  }

  noise(store.getState());

  return store;
};
