 import React, { Component } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  _ScrollView,
} from 'react-native';

export default class Regform extends Component{
  constructor(){
    super()
    this.state={
      name: '',
      nameValidate: true,
      password: '',
      passwordValidate: true,
      email: '',
      emailValidate: true,
      phone: '',
      phoneValidate: true,

    }
  }
  validate(text, type)
  {
   let alph=/^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/;
   let num=/^[0-9]/;
   let reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let phx= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if(type=='username'){
    if(alph.test(text)){
     this.setState({
       nameValidate: true,
      
     })
    }
    else
    {
      this.setState({
        nameValidate: false,
    }) 
  }
  } 
  
  else if(type=='password'){
    if(num.test(text)){
      this.setState({
        passwordValidate: true,
       
      })
     }
     else
     {
       this.setState({
         passwordValidate: false,
     }) 
   }

  }
  else if(type=='email'){
    if(phx.test(text)){
      this.setState({
        emailValidate: true,
       
      })
     }
     else
     {
       this.setState({
        emailValidate: false,
     }) 
   }

  }
  else if(type=='phone'){
    if(phx.test(text)){
      this.setState({
        phoneValidate: true,
       
      })
     }
     else
     {
       this.setState({
        phoneValidate: false,
     }) 
   }

  }
  }
    render(){
        return (
          <ScrollView>   
        <View  style={styles.container}>
        
            <Text style={styles.text}>
               Let's get Started!
            </Text>
            <Image  style = {{ width: 300, height: 300,  alignSelf: 'center', }} source={require('C:/Users/Jigyasa/test/Images/signupimg.jpg')} />
        <TextInput 
        style={[styles.input, !this.state.nameValidate? styles.error:null]}
        onChangeText={(text)=> this.validate(text, 'username')}
          placeholder='Full Name'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
         <TextInput 
        style={[styles.input, !this.state.emailValidate? styles.error:null]}
        onChangeText={(text)=> this.validate(text, 'email')}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput 
        style={[styles.input, !this.state.passwordValidate? styles.error:null]}
        onChangeText={(text)=> this.validate(text, 'password')}
        secureTextEntry={true}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        
        <TextInput 
        style={[styles.input,!this.state.phoneValidate? styles.error:null] }
        onChangeText={(text)=> this.validate(text, 'phone')}
       keyboardType="numeric"
          placeholder='Phone'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
       <TouchableOpacity
        style={styles.button}
      
      >
        <Text style= {styles.txt1}>Sign up!</Text>
      </TouchableOpacity>
        
           
        
        </View>
        </ScrollView>
        );
        }
    }
    
    const styles = StyleSheet.create({
     container:{
       
         justifyContent: 'center',
         marginTop: 50,
         padding: 20,
         backgroundColor: '#ffffff',
     },
     text:{
        color: 'grey',
        fontSize:38,
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
        img:{

        },
        txt1:{
            textAlign: 'center',
            color: 'white',

        },
        error:{
borderWidth:3,
borderColor:'red',
        }
        
    
    });
 