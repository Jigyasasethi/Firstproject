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
    render(){
        return (
          <ScrollView>   
        <View  style={styles.container}>
        
            <Text style={styles.text}>
               Let's get Started!
            </Text>
            <Image  style = {{ width: 300, height: 300,  alignSelf: 'center', }} source={require('C:/Users/Jigyasa/test/Images/signupimg.jpg')} />
        <TextInput 
        style={styles.input}
        
          placeholder='Full Name'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
         <TextInput 
        style={styles.input}
        
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
         <TextInput 
        style={styles.input}
        
          placeholder='Optinal Code'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput 
        style={styles.input}
        
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

        }
        
    
    });
 