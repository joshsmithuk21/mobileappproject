import React, { Component } from 'react';
import {ScrollView,Text,TextInput,View,Button, Image} from 'react-native';


export default class Signup extends Component{

  <TextInput
  style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2,  marginBottom: 20,marginLeft: 5 }}
  placeholder="First Name"
  placeholderTextColor="#000000"
  secureTextEntry ={false}
  autoCorrect={true}
  />

  <TextInput
  style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, marginLeft: 5 }}
  placeholder="Last Name"
  placeholderTextColor="#000000"
  secureTextEntry ={false}
  password = {false}
  autoCorrect={true}
  />

  <TextInput
  style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2,  marginBottom: 20,marginLeft: 5 }}
  placeholder="Email Address"
  placeholderTextColor="#000000"
  secureTextEntry ={false}
  autoCorrect={false}
  />

  <TextInput
  style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, marginLeft: 5 }}
  placeholder="Password"
  placeholderTextColor="#000000"
  secureTextEntry ={true}
  password={true}
  autoCorrect={false}
  />


}
