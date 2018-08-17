/** @format */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import {name as appName} from './app.json';
import store from './src/store'
import {Provider} from 'react-redux'

const RNRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
 );
AppRegistry.registerComponent('ZomatoClone', () => RNRedux);
