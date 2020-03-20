import React, { Component } from 'react';
import {ScrollView,Text,TextInput,View,Button, TouchableOpacity,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from "@react-navigation/core";

import Login from './Login';
class Signup extends Component {

  constructor()
  {
    super();
    this.state={
      email:'',
      given_name:'',
      family_name:'',
      password:''
    }
  }

  updateValue(text, field){
    if(field == 'given_name')
    {
      this.setState({
        given_name:text,
      })
    }
    else if (field == 'email'){
      this.setState({
        email:text,
      })
    }
    else if (field == 'family_name'){
        this.setState({
          family_name:text,
        })
      }
      else if (field == 'password'){
          this.setState({
            password:text,
          })
        }
  }

    submit(){


    let collection = {
      "given_name": this.state.given_name,
      "family_name": this.state.family_name,
      "email": this.state.email,
      "password": this.state.password
      }
    console.warn(collection); // Shows the inputted user credentials

    fetch('http://10.0.2.2:3333/api/v0.0.5/user',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
    .then((response) => response.json())
    .then((collection) => {
      console.log('Account Created:', collection);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    return (

      <View style ={styles.signup}>
        <Text style ={styles.header}> Sign Up!</Text>

        <TextInput style={styles.textinput} placeholder ="First Name"
          underlinecolorAndroid = {'transparent'}
          onChangeText ={(text)=>this.updateValue(text,'given_name')}
          />

        <TextInput style={styles.textinput} placeholder ="Last Name"
          underlinecolorAndroid = {'transparent'}
          onChangeText ={(text)=>this.updateValue(text,'family_name')}/>

          <TextInput style={styles.textinput} placeholder ="Email Address"
          underlinecolorAndroid = {'transparent'}
          onChangeText ={(text)=>this.updateValue(text,'email')}/>

          <TextInput style={styles.textinput} placeholder ="Password"
            secureTextEntry={true}
            underlinecolorAndroid = {'transparent'}
            onChangeText ={(text)=>this.updateValue(text,'password')}/>
          <TouchableOpacity style ={styles.button}>
          <Button
            onPress={()=>this.submit()}
            title= "Create Account"
            />
          </TouchableOpacity>
          </View>
        );

      }
    }



export default Signup;
const styles = StyleSheet.create({
signup: {

    alignSelf: 'stretch',
    alignItems:'center',

},

header: {
  fontSize: 50,
  color: '#fc0703',
  paddingBottom: 10,
  marginBottom: 40,
  borderBottomColor: '#a19187',
  fontWeight: 'bold',

},
textinput:{
  alignSelf: 'stretch',
  height: 40,
  marginBottom: 30,
  color: '#000000',
  borderBottomColor:'#af8f8f',
  backgroundColor:'#59cbbd',
  borderBottomWidth: 1,
},

button:{
  alignSelf: 'stretch',
  alignItems:'center',
  padding: 20,
  backgroundColor:'#59cbbd',
  marginTop:30,
},

btntext: {
  color: 'black',
  fontWeight: 'bold',
}

});
