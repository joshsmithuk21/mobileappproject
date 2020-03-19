import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
  	Image,
    AppRegistry,
    ActivityIndicator,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NewsFeed from './NewsFeed'
import Signup from './Signup';

export default class Login extends Component {
  constructor(props) {
    super();
    this.state ={
      email:'',
      password: '',
      isLoggingIn: false,
      message: '',
      name: '',
      data:[],
      id:'',
      token:''

      }
    }


    updateValue(text, field){

     if(field == 'email')
      {
        this.setState({
          email:text,
          })
      }
   else if(field == 'password')
      {
        this.setState({
          password:text,
          })
      }
    }


    submit()
    {
      let collection={
      "email": this.state.email,
      "password": this.state.password,
    //  "token":this.state.token

     }
        console.log(collection);



    fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(collection),
    }).then((response) => response.json())
      .then(async (data)=>{
         try {
           await AsyncStorage.setItem('token',data.token)
           await AsyncStorage.setItem('id',data.id.toString()) //Needed to change to string in order for the value to be stored within 'data'
           this.props.navigation.navigate("NewsFeed")
         } catch (e) {
           console.log("Error: ",e)
            Alert(e)
          }
         })
         .catch(() => {
        alert('The Account Not Found, Please Sign Up');
      })
  }


      clearemail = () => {
          this._email.setNativeProps({ text: '' });
          this.setState({ message: '' });
      }

      clearPassword = () => {
          this._password.setNativeProps({ text: '' });
          this.setState({ message: '' });
      }

    render() {

      return (
        <ScrollView style={{padding: 20}}>
          <Image	style={{width: 200, height: 200,marginLeft: 70,marginBottom: 100 }}
					source={require('../images/chittrlogo.png')}
				/>

                <TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2,  marginBottom: 20,marginLeft: 5 }}
           ref={component => this._email = component}
           onChangeText={(text) => this.updateValue(text,'email')}
				   placeholder="Email Address"
				   placeholderTextColor="#000000"
           autoFocus={true}
           secureTextEntry ={false}
           onFocus={this.clearemail}/>

				<TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, marginLeft: 5 }}
           ref={component => this._password = component}
           onChangeText={(text) => this.updateValue(text,'password')}
				   placeholder="Password"
				   placeholderTextColor="#000000"
				   secureTextEntry ={true}
				   password={true}
	         onFocus={this.clearPassword}
    			/>

      {!!this.state.message && (
				<Text
					style={{fontSize: 14, color: 'red', padding: 5}}>
					{this.state.message}
				</Text>
  		)}

        <View style={{paddingBottom: 10}} />
        <Button
        title="Sign Up Here!"
	      onPress={()=> this.props.navigation.navigate('Signup')}
        />

				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button
					disabled={this.state.isLoggingIn||!this.state.email||!this.state.password}//stops people typing in when application is contacting server
		      		  onPress={()=>this.submit()}
		      		title="Submit"
          />
      </ScrollView>
    )
	}
}
