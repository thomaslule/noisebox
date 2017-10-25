import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import reducer, { persistPaths, error } from './reducer';
import noise from './noise';
import actions from './actions';
import { unzip } from './zip';
import { onConnect, onDisconnect } from './controller';

export default () => {
  const enhancer = compose(applyMiddleware(thunk, logger), persistState(persistPaths()));
  const store = createStore(reducer, enhancer);

  store.subscribe(() => {
    const state = store.getState();
    try {
      noise(state);
      if (error.isPresent(state)) store.dispatch(actions.errorHide());
    } catch (e) {
      if (!error.isPresent(state)) store.dispatch(actions.errorShow(e));
    }
  });

  if (window.location.hash.length > 1) {
    const stateJson = unzip(window.location.hash.substring(1));
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    store.dispatch(actions.stateJsonChange(stateJson));
  }

  onConnect(gamepad => store.dispatch(actions.gamepadsConnected(gamepad)));
  onDisconnect(gamepad => store.dispatch(actions.gamepadsDisconnected(gamepad)));

  noise(store.getState());

  return store;
};
