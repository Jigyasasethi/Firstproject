/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Regform from './App/Components/Regform';
import loginform from './App/Components/loginform';
import Welcomescreen from './App/Components/Welcomescreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Register" component={Regform} />

          <Stack.Screen name="login" component={loginform}></Stack.Screen>
          <Stack.Screen name="Welcome" component={Welcomescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
