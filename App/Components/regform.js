import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
export default class Regform extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      nameValidate: true,
      password: '',
      passwordValidate: true,
      hidePassword: true,
      email: '',
      emailValidate: true,
      phone: '',
      phoneValidate: true,
      TextInputValue: '',
      ErrorStatus: true,
    };
  }
  validate(text, type) {
    let alph = /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/;
    let num = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let phx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (type == 'username') {
      if (alph.test(text)) {
        this.setState({
          nameValidate: true,
        });
      } else {
        this.setState({
          nameValidate: false,
        });
      }
    } else if (type == 'password') {
      if (num.test(text)) {
        this.setState({
          passwordValidate: true,
        });
      } else {
        this.setState({
          passwordValidate: false,
        });
      }
    } else if (type == 'email') {
      if (reg.test(text)) {
        this.setState({
          emailValidate: true,
        });
      } else {
        this.setState({
          emailValidate: false,
        });
      }
    } else if (type == 'phone') {
      if (phx.test(text)) {
        this.setState({
          phoneValidate: true,
        });
      } else {
        this.setState({
          phoneValidate: false,
        });
      }
    }
  }
  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  /*  check = (TextInputValue) => {
    if (TextInputValue.trim() != 0) {
      this.setState({TextInputValue: TextInputValue, ErrorStatus: true});
    } else {
      this.setState({TextInputValue: TextInputValue, ErrorStatus: false});
    }
  };
  buttonClickListener = () => {
    const {TextInputValue} = this.state;
    if (TextInputValue == '') {
      Alert.alert('Username is required!');
    }
  }; */

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Let's get Started!</Text>
          <Image
            style={{width: 300, height: 300, alignSelf: 'center'}}
            source={require('C:/Users/Jigyasa/test/Images/signupimg.jpg')}
          />
          <TextInput
            style={[
              styles.input,
              !this.state.nameValidate ? styles.error : null,
              this.state.ErrorStatus == false ? (
                <Text style={styles.errorMessage}>
                  * Please enter the text to proceed.
                </Text>
              ) : null,
            ]}
            onChangeText={(text) => this.validate(text, 'username')}
            placeholder="Full Name"
            autoCapitalize="none"
            placeholderTextColor="white"
          />

          <TextInput
            style={[
              styles.input,
              !this.state.emailValidate ? styles.error : null,
            ]}
            onChangeText={(text) => this.validate(text, 'email')}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
          />
          <View style={styles.textBoxContainer}>
            <TextInput
              style={[
                styles.input,
                styles.textboxbtnholder,
                !this.state.passwordValidate ? styles.error : null,
              ]}
              onChangeText={(text) => this.validate(text, 'password')}
              secureTextEntry={this.state.hidePassword}
              placeholder="Password"
              autoCapitalize="none"
              placeholderTextColor="white"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touachableButton}
              onPress={this.setPasswordVisibility}>
              <Image
                source={
                  this.state.hidePassword
                    ? require('C:/Users/Jigyasa/test/Images/hide.png')
                    : require('C:/Users/Jigyasa/test/Images/show.png')
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={[
              styles.input,
              !this.state.phoneValidate ? styles.error : null,
            ]}
            onChangeText={(text) => this.validate(text, 'phone')}
            keyboardType="numeric"
            placeholder="Phone"
            autoCapitalize="none"
            placeholderTextColor="white"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.txt1}>Sign up!</Text>
          </TouchableOpacity>
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
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightsteelblue',
    /*  borderBottomColor: 'black',
        borderBottomWidth: 1, */
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
