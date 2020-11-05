import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  BackHandler,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class loginform extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValidate: true,
      passwordValidate: true,
    };
  }
  validate(text, type) {
    let num = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (type == 'password') {
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
    }
  }
  _retrieveData = async () => {
    const value = await AsyncStorage.getItem('email');
    const value1 = await AsyncStorage.getItem('password');

    if (value !== null && value1 !== null) {
      if (value == this.state.email && value1 == this.state.password) {
        console.log(value);
        alert('hey' + value); // We have data!!
        this.props.navigation.navigate('myprofile');
      } else {
        alert(
          'Error fetching Data. PLease Singup first if you have not already signed in!',
        );
      }
    }
  };
  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text1}>Hello</Text>
          <Text style={styles.text}>Thanks for Joining Us!</Text>
          <Image
            style={{width: 300, height: 300, alignSelf: 'center'}}
            source={require('C:/Users/Jigyasa/test/Images/loginimg.jpg')}
          />

          <TextInput
            style={[
              styles.input,
              !this.state.emailValidate ? styles.error : null,
            ]}
            placeholder="Email"
            onChangeText={(text) => this.validate(text, 'email')}
            value={this.state.email}
            autoCapitalize="none"
            placeholderTextColor="white"
          />

          <TextInput
            style={[
              styles.input,
              styles.textboxbtnholder,
              !this.state.passwordValidate ? styles.error : null,
            ]}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => this.validate(text, 'password')}
            value={this.state.password}
            autoCapitalize="none"
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.button} onPress={this._retrieveData}>
            <Text style={styles.txt1}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'lightsteelblue',
  },
  text1: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'cornflowerblue',
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
    backgroundColor: 'cornflowerblue',
    borderRadius: 20,
    padding: 10,

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
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
