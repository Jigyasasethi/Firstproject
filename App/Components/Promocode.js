import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Promocode extends Component {
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
