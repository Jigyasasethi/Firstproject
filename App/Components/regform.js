 import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Regform extends Component{
    render(){
        return (
            
        <View  style={styles.container}>
            <Text style={styles.text}>
                SIGN UP
            </Text>
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
        fontSize:18,
        fontWeight: 'normal',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
     },
     input: {
         
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 350,
        height: 45,
       backgroundColor: 'lightgrey',
       
        marginTop: 40,
        padding: 8,
        color: 'grey',
        borderRadius: 7,
        fontSize: 18,
        fontWeight: 'normal',
      },
      button: {
        backgroundColor: 'purple',
        borderRadius: 10,
        padding: 14,
        borderRadius: 20,
        marginTop: 60,
       
        },
        txt1:{
            textAlign: 'center',
            color: 'white',

        }
        
    
    });
 