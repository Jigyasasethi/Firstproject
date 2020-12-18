import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
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
      <ScrollView>
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
              width: 200,
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
          <View style={styles.rectangle}>
            <Image
              style={styles.img}
              source={require('C:/Users/Jigyasa/test/Images/Rewards1.png')}
            />
            <Text style={styles.txt1}>Your Reward is Expiring, Order Now!</Text>
            <Text style={{textAlign: 'center'}}>
              Don't forget to use your rewards! Claim it and enjoy exciting
              discounts.
            </Text>
            <TouchableOpacity style={styles.button1}>
              <Text
                style={styles.txt}
                onPress={() => this.props.navigation.navigate('Stores')}>
                Locate Us
              </Text>
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
    height: 900,
  },
  hellotext: {
    fontSize: 35,
    fontFamily: 'SF-UI-Display-Regular',
    textAlign: 'center',
    marginTop: 20,
    color: 'steelblue',
  },
  img: {
    width: 230,
    height: 100,
    alignSelf: 'center',
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
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: 'steelblue',
    width: 200,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 28,
  },

  txt: {
    color: 'white',
    fontFamily: 'SF-UI-Display-Regular',
    fontWeight: 'bold',
    fontSize: 18,
  },
  txt1: {
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'steelblue',
  },
  rectangle: {
    top: '52%',
    right: '4%',
    left: '4%',
    position: 'absolute',
    borderRadius: 30,
    padding: 20,
  },
});
