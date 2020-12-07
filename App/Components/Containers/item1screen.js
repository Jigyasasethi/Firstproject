import React, {Component} from 'react';

import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {itemA} from '../Data1';
import Products from '../Products';
import {connect} from 'react-redux';

class item1screen extends Component {
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
      <View style={{flex: 1}}>
        <Products products={itemA} onPress={this.props.addItemToCart} />
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
export default connect(null, mapDispatchToProps)(item1screen);
/* const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
 */
