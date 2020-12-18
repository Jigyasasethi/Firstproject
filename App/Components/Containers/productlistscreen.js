import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
export default class productlistscreen extends Component {
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  goToNextScreen = (index) => {
    if (index == 0) {
      this.props.navigation.navigate('item1');
    } else if (index == 1) {
      this.props.navigation.navigate('item2');
    } else if (index == 2) {
      this.props.navigation.navigate('item1');
    } else if (index == 3) {
      this.props.navigation.navigate('item2');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('C:/Users/Jigyasa/test/Images/Menu1.png')}
          style={{
            resizeMode: 'contain',
            height: 180,
            width: 600,
            alignSelf: 'center',
          }}></Image>
        <Text style={styles.txt}>Choose what you're Craving for!</Text>
        <FlatList
          data={[
            {
              index: 0,
              key: 'MEAL DEALS',
              image: require('C:/Users/Jigyasa/test/Images/Menu.png'),
            },
            {index: 1, key: 'SANDWICHES'},
            {index: 2, key: 'PIZZA'},
            {index: 3, key: 'BURGER'},
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
                  index % 2 == 0 ? 'white' : 'lightgoldenrodyellow',
              }}
              onPress={() => this.goToNextScreen(index)}>
              {item.key}
            </Text>
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
  container: {
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 40,
    padding: 10,
    height: '100%',
    backgroundColor: 'lightyellow',
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 14,
    fontFamily: 'Playfair_Display',
    color: 'gray',
  },
});
