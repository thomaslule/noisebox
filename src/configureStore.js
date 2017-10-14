import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import noise from './noise';
import { errorAction, noErrorAction } from './Error/errorActions';

export default () => {
  const createStoreWithHash = () => {
    if (window.location.hash.length > 1) {
      const initialState = JSON.parse(atob(window.location.hash.substring(1)));
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
      return createStore(reducer, initialState, applyMiddleware(logger));
    }
    return createStore(reducer, applyMiddleware(logger));
  };

  const store = createStoreWithHash();

  store.subscribe(() => {
    const state = store.getState();
    try {
      noise(state);
      if (state.error) store.dispatch(noErrorAction());
    } catch (e) {
      if (!state.error) store.dispatch(errorAction(e));
    }
  });

  noise(store.getState());

  return store;
};
