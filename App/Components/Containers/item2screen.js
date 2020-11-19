import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {itemB} from '../Data1';
import Products from '../Products';
import {connect} from 'react-redux';

class item2screen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Products products={itemB} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};
export default connect(null, mapDispatchToProps)(item2screen);
