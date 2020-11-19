/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Maintabnavigator from './App/Components/Maintabnavigator';
import {Provider} from 'react-redux';
import Store from './Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Maintabnavigator></Maintabnavigator>
      </Provider>
    );
  }
}
