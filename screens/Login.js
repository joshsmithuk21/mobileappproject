import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
  	Image,
    AppRegistry
} from 'react-native';

import NewsFeed from './NewsFeed';
import NewTweet from './NewChit';
import Signup from './Signup';

export default class Login extends Component {
  constructor(props) {
    super();
    this.state ={
      email:'',
      password: '',
      //isLoggingIn: false,

      }
    }

    updateValue(text, field){
    if (field == 'email'){
        this.setState({
          email:text,
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
      "email": this.state.email,
      "password": this.state.password
      }
    console.warn(collection);

    fetch('http://10.0.2.2:3333/api/v0.0.5/login',{
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

            <ScrollView style={{padding: 20}}>
                <Image
					style={{width: 200, height: 200,marginLeft: 70,marginBottom: 100 }}
					source={require('../images/chittrlogo.png')}
				/>

                <TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2,  marginBottom: 20,marginLeft: 5 }}
           onChangeText ={(text)=>this.updateValue(text,'email')}
				   placeholder="Email Address"
				   placeholderTextColor="#000000"
				   secureTextEntry ={false}
				   autoCorrect={false} />

				<TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, marginLeft: 5 }}
           onChangeText ={(text)=>this.updateValue(text,'password')}
				   placeholder="Password"
				   placeholderTextColor="#000000"
				   secureTextEntry ={true}
				   password={true}
				   autoCorrect={false}
			/>



        <View style={{paddingBottom: 10}} />
        <Button
        title="Submit"
	      onPress={()=> this.props.navigation.navigate('NewsFeed')}

              />

        <View style={{paddingTop: 10}} />
        <Button
	      onPress={()=>this.props.navigation.navigate('Signup')}
                  title="Sign Up"
              />
          </ScrollView>
    )
		}
	}
