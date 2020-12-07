import React, {Component} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class productlistscreen extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  goToNextScreen = (index) => {
    if (index == 0) {
      this.props.navigation.navigate('item1');
    } else {
      this.props.navigation.navigate('item2');
    }
  };
  render() {
    return (
      <View>
        <FlatList
          data={[
            {index: 0, key: 'Meal Deals'},
            {index: 1, key: 'Sandwiches'},
          ]}
          renderItem={({item, index}) => (
            <Text
              style={styles.item}
              onPress={() => this.goToNextScreen(index)}>
              {item.key}
            </Text>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
        {/*  <TouchableOpacity
          onPress={() => this.props.navigation.navigate('item1')}>
          <Text>Meal Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('item2')}>
          <Text>Sandwiches</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
