import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

const timestamp = Date.now();
const  token = AsyncStorage.getItem("token")
  const  chit_id = AsyncStorage.getItem("chit_id")

export default class NewChit extends Component {
  constructor(props) {
    super(props);
    this.state ={
      chit_content: '',
      timestamp: timestamp,
      token: token,
      chit_id:''


      }
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
    let collection={
    "chit_content": this.state.chit_content,
    "timestamp": this.state.timestamp,
    "chit_id" : this.state.chit_id,
   }

  console.log(collection);

  fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {//Sending the new chit to the server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.state.token,
      },
      body: JSON.stringify(collection),
    })
    .then((response) => response.json())
    .then((collection) => {
      console.log('Chit Sent!:', collection.chit_id);
      this.props.navigation.navigate("NewsFeed");
            })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  render() {

    return (

          <View style ={styles.newchit}>
            <Text style ={styles.header}>Chit To Your Hearts Content</Text>
            <TextInput style={styles.textinput} placeholder ="Write Your New Chit Here"
              maxLength = {144}
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
        backgroundColor: '#59cbbd'
    },
    newchit:{
      borderColor:'#a19187',
      backgroundColor: '#59cbbd'
    },
    header: {
      fontSize: 30,
      alignSelf: 'stretch',
      color: '#fc0703',
      paddingBottom: 10,
      marginBottom: 40,
      fontWeight: 'bold',
      backgroundColor: '#59cbbd'
    },
    textinput:{
      alignSelf: 'stretch',
      height: 150,
      marginBottom: 30,
      color: '#000000',
      borderWidth: 1,
      alignItems:'center',
      backgroundColor: '#59cbbd'
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
