import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Welcomescreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{width: 250, height: 50, alignSelf: 'center'}}
            source={require('C:/Users/Jigyasa/test/Images/Burgerlogo.png')}
          />

          <Image
            style={{width: 350, height: 350, alignSelf: 'center'}}
            source={require('C:/Users/Jigyasa/test/Images/Food.jpg')}
          />
          <Text style={styles.text}>Hello There!</Text>
          <Text style={styles.text1}>
            You're just few steps away from claiming exclusice discounts!
          </Text>
          <View style={styles.buttonalign}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.txt1}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={styles.txt1}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  buttonalign: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 32,
  },
  text: {
    color: 'red',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',

    /*  borderBottomColor: 'black',
        borderBottomWidth: 1, */
  },
  text1: {
    color: 'darkgrey',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 18,
  },

  button: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 8,

    width: 160,
  },
  button1: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 8,

    width: 160,
  },
  txt1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '100',
    fontSize: 14,
    textAlignVertical: 'center',
  },
});
