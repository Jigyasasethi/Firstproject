import 'react-native-gesture-handler';
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
import {connect} from 'react-redux';
class Regform extends Component {
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
    let alph = /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/; // username regex
    let num = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; //password regex
    let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // email regex
    let phx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // phone regex
    if (type == 'username') {
      this.setState({username: text});
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
      this.setState({password: text});
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
      this.setState({email: text});
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
      this.setState({phone: text});
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
    this.setState({hidePassword: !this.state.hidePassword}); //password visibility
  };

  _storeData = () => {
    if (
      this.state.email == '' ||
      this.state.password == '' ||
      this.state.username == '' ||
      this.state.phone == ''
    ) {
      alert('Please Enter all the details!');
    } else if (
      this.state.nameValidate == false ||
      this.state.emailValidate == false ||
      this.state.passwordValidate == false ||
      this.state.phoneValidate == false
    ) {
      alert('Check Validations!');
    } else {
      this.props.addUserDetails(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.phone,
      );
      alert('User Added!');
      this.props.navigation.navigate('myprofile');
    }
  };

  render() {
    console.warn(
      this.props.user,
      this.props.email,
      this.props.password,
      this.props.phone, // To keep track of data stored
    );
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

          <TouchableOpacity style={styles.button} onPress={this._storeData}>
            <Text style={styles.txt1}>Sign up!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.userred.username,
    email: state.userred.email,
    password: state.userred.password,
    phone: state.userred.phone,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addUserDetails: (username, email, password, phone) =>
      dispatch({
        type: 'ADD_USER_DETAIL',
        payload: {
          username: username,
          email: email,
          password: password,
          phone: phone,
        },
      }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Regform);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
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
