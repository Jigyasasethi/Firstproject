import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerActions} from '@react-navigation/native';
export default class Accounthistory extends Component {
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
