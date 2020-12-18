import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
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

  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              index: 0,
              key: '129th Ave, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
            {
              index: 1,
              key: '19th St, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
            {
              index: 1,
              key: '61st St, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
            {
              index: 1,
              key: '71st & Lewis, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
            {
              index: 1,
              key: '71st & Lewis, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
            {
              index: 1,
              key: '71st & Lewis, TX, United States',
              image: require('C:/Users/Jigyasa/test/Images/arrow.png'),
            },
          ]}
          renderItem={({item, index}) => (
            <View>
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  height: 120,
                  textAlign: 'left',
                  fontFamily: 'SF-UI-Display-Regular',
                  textAlignVertical: 'center',
                  backgroundColor: index % 2 == 0 ? '#f2f2f2' : 'lavender',
                }}>
                onPress={() => this.props.navigation.navigate('maps')}
                {item.key}
              </Text>
              <Image style={styles.img} source={item.image} />
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
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
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  img: {
    height: 22,
    width: 22,
    position: 'absolute',

    right: 0,
    top: 50,
  },
});
