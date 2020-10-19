/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Regform from "./App/Components/regform"

const App: () => React$Node = () => {
  return (
  <Regform/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
