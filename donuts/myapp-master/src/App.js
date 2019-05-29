import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import MyChart from './containers/MyChart/MyChart'

export default () => (
  <Provider store={store}>
    <MyChart />
  </Provider>
)

