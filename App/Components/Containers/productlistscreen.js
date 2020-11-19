import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class productlistscreen extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('item1')}>
          <Text>Item1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('item2')}>
          <Text>Item2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
