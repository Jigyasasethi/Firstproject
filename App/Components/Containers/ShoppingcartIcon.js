import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

const ShoppingcartIcon = (props) => (
  <View>
    <View
      style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(95,197,123,0.8)',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        {props.cartItems.length}
      </Text>
    </View>
    <TouchableOpacity onPress={props.onPress}>
      <FontAwesome5 name="shopping-cart" size={30}></FontAwesome5>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = (State) => {
  return {
    cartItems: State.cartItems,
  };
};
export default connect(mapStateToProps)(ShoppingcartIcon);
