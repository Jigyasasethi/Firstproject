import React, {Component} from 'react';
import addresslist from './addresslist';
import CartScreen from './Containers/CartScreen';
import ShopppingcartIcon from './Containers/ShoppingcartIcon';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();
export default class productlistscreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'Locate Us',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'steelblue',
          },
          headerRight: (props) => (
            <ShopppingcartIcon
              {...props}
              onPress={() =>
                this.props.navigation.navigate('Cart')
              }></ShopppingcartIcon>
          ),
        }}
        initialRouteName="productlist">
        <Stack.Screen name="addresslist" component={addresslist} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  stores: {
    marginTop: 12,
    marginLeft: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});
