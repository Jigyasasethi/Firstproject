import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <FontAwesome5 name="bars" size={28}></FontAwesome5>
        </TouchableOpacity>
        <View>
          <Text style={styles.HeaderText}>Game Zone</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  HeaderText: {
    fontSize: 20,
  },
});
