import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class NewChit extends Component {
  constructor(props) {
    super(props);
    this.state = {chit_content: ''}
  }


  updateValue(text, field){
    if(field == 'chit_content')
    {
      this.setState({
        chit_content:text,
        //need time stamps
      })
    }
  }

  submit()
  {
    let collection={}
    collection.chit_content=this.state.chit_content,

    console.warn(collection);

  fetch('http://10.0.2.2:3333/api/v0.0.5/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
    .then((response) => response.json())
    .then((collection) => {
      console.log('Chit Sent!:', collection);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  render() {
    return (
          <View style ={styles.newchit}>
            <Text style ={styles.header}> Chit To Your Hearts Content </Text>
            <TextInput style={styles.textinput} placeholder ="                              Write Your New Chit Here"
              maxLength = {144}               //simple method to limit max amount of characters a user can input
              underlinecolorAndroid = {'transparent'}
              onChangeText ={(text)=>this.updateValue(text,'chit_content')}
              />

              <TouchableOpacity style ={styles.button}>
                  <View style={{paddingBottom: 10, width: "95%"}} />
              <Button
                onPress={()=>this.submit()}
                title ="Post Chit!"
                />
              </TouchableOpacity>
            </View>
          );

        }
      }

const styles = StyleSheet.create({
    signup: {
        alignItems:'center',

    },
    newchit:{
      borderColor:'#a19187',

    },
    header: {
      fontSize: 30,
      alignSelf: 'stretch',
      color: '#fc0703',
      paddingBottom: 10,
      marginBottom: 40,
      fontWeight: 'bold',
    },
    textinput:{
      alignSelf: 'stretch',
      height: 150,
      marginBottom: 30,
      color: '#000000',
      borderWidth: 1,
      alignItems:'center',
    },

    button:{
      alignSelf: 'stretch',
      alignItems:'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop:30,
    },
    btnstyle:{
      width:"50%",
      backgroundColor: '#59cbbd',
    },

});
