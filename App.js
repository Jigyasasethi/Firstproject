/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
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
import {DrawerContent} from './App/Components/DrawerContent';
import {Provider as PaperProvider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Rewards from './App/Components/Rewards';
import Orders from './App/Components/Orders';
import Stores from './App/Components/Stores';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Explore from './App/Components/Explore';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        /*  options={{
          drawerIcon: ({focused, size}) => (
            <FontAwesome5 name="bars" style={25} />
          ),
        }} */
        initialRouteName="Welcome">
        <Stack.Screen name="Register" component={Regform} />

        <Stack.Screen name="login" component={loginform}></Stack.Screen>
        <Stack.Screen name="Welcome" component={Welcomescreen} />
        <Stack.Screen
          name="myprofile"
          component={MainDrawerNavigator}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function MainDrawerNavigator() {
  return (
    <PaperProvider>
      <Drawer.Navigator
        initialRouteName="Myprofile"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="myprofile" component={MyTabs} />
        <Drawer.Screen name="About Us" component={Aboutus} />
        <Drawer.Screen name="Promo Code" component={Promocode} />
        <Drawer.Screen name="Account History" component={Accounthistory} />
      </Drawer.Navigator>
    </PaperProvider>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Rewards"
      activeColor="#fff"
      tabBarColor="#009387">
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarLabel: 'rewards',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="trophy" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'explore',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="list-ul" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="hamburger" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarLabel: 'stores',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="search-location" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainStackNavigator;
