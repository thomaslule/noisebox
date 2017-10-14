import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import Dashboard from './Dashboard';
import noise from './noise';
import { errorAction, noErrorAction } from './Error/errorActions';

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

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
