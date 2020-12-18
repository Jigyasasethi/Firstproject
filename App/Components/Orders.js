import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import productlistscreen from './Containers/productlistscreen';
import item1screen from './Containers/item1screen';
import item2screen from './Containers/item2screen';
import ShopppingcartIcon from './Containers/ShoppingcartIcon';
import CartScreen from './Containers/CartScreen';
const Stack = createStackNavigator();
export default class Orders extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'ShoppingApp',
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
        <Stack.Screen name="productlist" component={productlistscreen} />

        <Stack.Screen name="item1" component={item1screen}></Stack.Screen>
        <Stack.Screen name="item2" component={item2screen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    );
  }
}
