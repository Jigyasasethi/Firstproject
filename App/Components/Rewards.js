import React, {Component} from 'react';
import CustomHeader from '../Components/Shared/CustomHeader';

import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

class Rewards extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Text style={styles.hellotext}>Hello, {this.props.username}</Text>
          <Text style={styles.freetext}>
            Your free food is just on your way
          </Text>
          <Text style={styles.freetext}>
            Collect your free Reward points now
          </Text>
          <Image
            style={{
              width: 280,
              height: 280,
              alignSelf: 'center',
            }}
            source={require('C:/Users/Jigyasa/test/Images/Rewards.png')}
          />

          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.txt}>Earn Points</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle} elevation={5}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Roboto-Light',
                fontWeight: 'bold',
                fontSize: 20,
                color: 'steelblue',
              }}>
              Your Reward is Expiring Soon!
            </Text>
            <Text style={{textAlign: 'center'}}>
              Don't forget to use your rewards! Claim it and enjoy exciting
              discounts.
            </Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.txt}>Earn Points</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle1} elevation={5}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Roboto-Light',
                fontWeight: 'bold',
                fontSize: 20,
                color: 'steelblue',
              }}>
              Your Reward is Expiring Soon!
            </Text>
            <Text style={{textAlign: 'center'}}>
              Don't forget to use your rewards! Claim it and enjoy exciting
              discounts.
            </Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.txt}>Earn Points</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    username: state.userred.username,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addUsername: (username) =>
      dispatch({
        type: 'ADD_USER_DETAIL',
        payload: {
          username: username,
        },
      }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: 800,
  },
  hellotext: {
    fontSize: 35,
    fontFamily: 'SF-UI-Display-Regular',
    textAlign: 'center',
    marginTop: 20,

    /*  color: 'sandybrown', */
  },

  freetext: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'SF-UI-Display-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'silver',
  },
  button: {
    backgroundColor: 'steelblue',
    width: 200,
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: 'steelblue',
    width: 150,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 14,
  },

  txt: {
    color: 'white',
    fontFamily: 'SF-UI-Display-Regular',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rectangle: {
    height: 138,

    top: '60%',
    right: '4%',
    left: '4%',
    position: 'absolute',
    borderRadius: 30,
    padding: 20,
  },
  rectangle1: {
    height: 138,
    top: 640,
    right: '4%',
    left: '4%',
    position: 'absolute',
    borderRadius: 30,
    padding: 20,
  },
});
