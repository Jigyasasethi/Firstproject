import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Rewards from './Rewards';
import orders from './orders';
import stores from './Stores';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Rewards"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarLabel: 'rewards',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="trophy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="hamburger" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={stores}
        options={{
          tabBarLabel: 'stores',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="search-location" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
