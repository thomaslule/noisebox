import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import Dashboard from './Dashboard';
import noise from './noise';

const store = createStore(reducer, applyMiddleware(logger));

store.subscribe(() => {
  noise(store.getState());
});

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
