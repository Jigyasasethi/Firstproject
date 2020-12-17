import React, {Component} from 'react';
import CustomHeader from '../Components/Shared/CustomHeader';

import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity, FlatList} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RadioButton, RadioGroup} from 'react-native-paper';
export default class Stores extends Component {
  _renderItem = ({item}) => (
    <View style={styles.listItem}>
      <RadioGroup>
        <RadioButton value={'item1'}>
          <Text>{item.key1}</Text>
        </RadioButton>

        <RadioButton value={'item2'}>
          <Text>{item.key2}</Text>
        </RadioButton>

        <RadioButton value={'item3'}>
          <Text>{item.key3}</Text>
        </RadioButton>
      </RadioGroup>
    </View>
  );

  render() {
    return (
      <View style={styles.stores}>
        <TouchableOpacity>
          <FontAwesome5
            name="bars"
            size={28}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }></FontAwesome5>
          <Text>Hello to Stores!</Text>
        </TouchableOpacity>
        <FlatList
          data={[
            {key1: 'Devin', key2: 'Jackson', key3: 'James'},
            {key1: 'Joel', key2: 'Jimmy', key3: 'Jillian'},
            {key1: 'Jillian', key2: 'Jackson', key3: 'James'},
            {key1: 'Devin', key2: 'Joel', key3: 'Jimmy'},
            {key1: 'Julie', key2: 'Jackson', key3: 'James'},
          ]}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stores: {
    marginTop: 12,
    marginLeft: 8,
  },
  listItem: {
    marginTop: 10,
    backgroundColor: 'gray',
  },
});
