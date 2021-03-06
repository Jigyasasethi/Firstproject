import React, {Component} from 'react';
import CustomHeader from '../Components/Shared/CustomHeader';

import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Myprofile extends Component {
  render() {
    return (
      <View style={styles.myprofile}>
        <TouchableOpacity>
          <FontAwesome5
            name="bars"
            size={28}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }></FontAwesome5>
          <Text>Hello to Myprofile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  myprofile: {
    marginTop: 12,
    marginLeft: 8,
  },
});
