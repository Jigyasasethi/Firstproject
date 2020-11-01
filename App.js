/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Icon, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Regform from './App/Components/Regform';
import loginform from './App/Components/loginform';
import Welcomescreen from './App/Components/Welcomescreen';
import Myprofile from './App/Components/Myprofile';
import Aboutus from './App/Components/Aboutus';
import Promocode from './App/Components/Promocode';
import Accounthistory from './App/Components/Accounthistory';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
          <Stack.Screen name="myprofile" component={Drawerroutes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
class Drawerroutes extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Myprofile" screenOptions={{}}>
        <Drawer.Screen name="About Us" component={Aboutus} />
        <Drawer.Screen name="Promo Code" component={Promocode} />
        <Drawer.Screen name="Account History" component={Accounthistory} />
      </Drawer.Navigator>
    );
  }
}
