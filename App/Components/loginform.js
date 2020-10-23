import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class loginform extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Thanks for Joining Us!</Text>
          <Image
            style={{width: 300, height: 300, alignSelf: 'center'}}
            source={require('C:/Users/Jigyasa/test/Images/loginimg.jpg')}
          />
          <TextInput
            style={[styles.input]}
            placeholder="Full Name"
            autoCapitalize="none"
            placeholderTextColor="white"
          />

          <TextInput
            style={[styles.input]}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
          />

          <TextInput
            style={[styles.input, styles.textboxbtnholder]}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  text: {
    color: 'grey',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightsteelblue',
  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: 'gainsboro',

    marginTop: 20,
    padding: 8,
    color: 'grey',
    borderRadius: 22,
    fontSize: 12,
    fontWeight: '100',
  },

  button: {
    backgroundColor: 'mediumslateblue',
    borderRadius: 10,
    padding: 14,
    borderRadius: 20,
    marginTop: 30,
  },
  img: {},
  txt1: {
    textAlign: 'center',
    color: 'white',
  },
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },

  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '160%',
    width: '80%',
  },
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
