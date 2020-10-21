import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ImagePropTypes,
} from 'react-native';
const custombutton =(props)=>{
    return(
         <Button title="KHLKKJL"
        onPress={()=> props.onPress()}
        /> 
    );

}
export default custombutton;