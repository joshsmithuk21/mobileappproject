import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import NewsFeed from './components/NewsFeed';
import NewTweet from './components/NewTweet';
import Singup from './components/Signup';


export default class app extends Component {
 constructor(props){
  super(props);
   this.state = {
       isLoggedIn: false,

     }
 }


 render() {


	if (this.state.isLoggedIn)
	return < NewsFeed

		onLogoutPress={() => this.setState({isLoggedIn: false})}
		/>;
	else
		return <Login
			onLoginPress={() => this.setState({isLoggedIn: true})}
		/>;
    return <AppContainer />;

    <View style = {styles.container}>
      <Signup />
      </View>
	}

 }

 const AppNavigator = createStackNavigator({

   NewsFeed:{
     screen: NewsFeed
   },
   NewTweet: {
     screen: NewTweet
   }
 });

 const AppContainer = createAppContainer(AppNavigator);

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#364851',
     alignItems: 'center',
     justifyContent: 'center'

   },
 });
