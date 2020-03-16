import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {chit_content: ''};
  }

  updateValue(text,field){
    if(field == 'chit_content')
    {
      this.setState({
        chit_content:text,
      }_
    }

  submit()
  {
    let collection={}
    collection.chit_content:this.state.chit_content,

    console.warn(collection);


  fetch('http://10.0.2.2:3333/api/v0.0.5/, {
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

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>New Tweet</Text>
    // </View>
          <View style ={styles.newtweet}>
            <Text style ={styles.header}> Sign Up!</Text>

            <TextInput style={styles.textinput} placeholder ="Write Your New Tweet Here"
              underlinecolorAndroid = {'transparent'}
              onChangeText ={(text)=>this.updateValue(text,'chit_content')}

              />

              <TouchableOpacity style ={styles.button}>
              onPress={()=>this.submit()}
                <Text style={styles.btntext}Sign Up />
              </TouchableOpacity>
            </View>
          );

        }


  const styles = StyleSheet.create({
    signup: {

        alignSelf: 'stretch',
    },

    header: {
      fontSize: 24,
      color: '#fffs',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#a199187',
    },
    textinput:{
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor:'#af8f8f8',
      borderBottomWidth: 1,
    },

    button:{
      alignSelf: 'stretch',
      alignItems:'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop:30,
    },

    btntext: {
      color: '#fff',
      fontWeight: 'bold',

    }

  });
