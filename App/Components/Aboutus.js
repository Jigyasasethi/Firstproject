import React, {Component} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerActions} from '@react-navigation/native';
export default class Aboutus extends Component {
  render() {
    return (
      <TouchableOpacity>
        <FontAwesome5
          name="bars"
          size={28}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }></FontAwesome5>
      </TouchableOpacity>
    );
  }
}
