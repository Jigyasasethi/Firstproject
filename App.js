/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ScrollViewComponent, View} from 'react-native';

import Regform from './App/Components/regform';
import Loginform from './App/Components/loginform';

export default class App extends Component {
  render() {
    return (
      <View>
        <Regform />
        <Loginform />
      </View>
    );
  }
}
