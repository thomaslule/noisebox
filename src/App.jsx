import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Dashboard from './Dashboard';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
