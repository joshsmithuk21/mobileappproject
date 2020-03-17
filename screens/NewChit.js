import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
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
      })
    }
  }

  submit()
  {
    let collection={}
    collection.chit_conten=this.state.chit_content,

    console.warn(collection);


  fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
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
            <Text style ={styles.header}>Chit To Your Hearts Content</Text>
            <TextInput style={styles.textinput} placeholder ="Write Your New Tweet Here"
              underlinecolorAndroid = {'transparent'}
              onChangeText ={(text)=>this.updateValue(text,'chit_content')}
              maxLength = {144} //simple method to limit max amount of characters a user can input
              />

              <TouchableOpacity style ={styles.button}>
              <Button
                Press={()=>this.submit()}
                title ="Post Chit!"
                />
              </TouchableOpacity>
            </View>
          );

        }
      }

const styles = StyleSheet.create({
    signup: {

        alignSelf: 'stretch',
    },
    newchit:{
      borderColor:'#a19187',

    },
    header: {
      fontSize: 24,
      color: '#fc0703',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#a19187',
      alignItems:'center',
      fontWeight: 'bold',
    },
    textinput:{
      alignSelf: 'stretch',
      height: 300,
      marginBottom: 30,
      color: '#000000',
      borderBottomWidth: 1,
      borderColor:'#000000',
    },

    button:{
      alignSelf: 'stretch',
      alignItems:'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop:30,
    },

});
