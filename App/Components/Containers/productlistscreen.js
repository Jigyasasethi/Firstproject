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
            {index: 0, key: 'MEAL DEALS'},
            {index: 1, key: 'SANDWICHES'},
            {index: 1, key: 'SANDWICHES'},
            {index: 1, key: 'SANDWICHES'},
          ]}
          renderItem={({item, index}) => (
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                height: 138,
                textAlign: 'center',
                fontFamily: 'SF-UI-Display-Regular',
                textAlignVertical: 'center',
                backgroundColor:
                  index % 2 == 0 ? '#f2f2f2' : 'lightgoldenrodyellow',
              }}
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
  /*  item: {
    padding: 10,
    fontSize: 16,
    height: 138,
    textAlign: 'center',
    fontFamily: 'SF-UI-Display-Regular',
    textAlignVertical: 'center',
    backgroundColor: index % 2 == 0 ? '#f2f2f2' : '#FFFFFF',
  }, */
});
