import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Maps from './src/containers/maps';

const store = configureStore();

const TestMapsRn = () => (
  <Provider store={store}>
    <Maps />
  </Provider>
);

AppRegistry.registerComponent(appName, () => TestMapsRn);
