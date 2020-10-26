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
import Regform from './App/Components/regform';
import loginform from './App/Components/loginform';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Regform}></Stack.Screen>
          <Stack.Screen name="login" component={loginform}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*  export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Regform />
          <Loginform />
        </View>
      </NavigationContainer>
    );
  }
}  */
