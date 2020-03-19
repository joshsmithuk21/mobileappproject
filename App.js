import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert,AppRegistry, AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';
import NewsFeed from './screens/NewsFeed';
import NewTweet from './screens/NewChit';
import Signup from './screens/Signup';

 // class app extends Component {
 // constructor(props){
 //  super(props);
 //   this.state = {
 //       isLoggedIn: false,
 //
 //     }
 // }
 //
 //
 // render() {
 //
 //
	// if (this.state.isLoggedIn)
	// return < NewsFeed
 //
	// 	onLogoutPress={() => this.setState({isLoggedIn: false})}
	// 	/>;
	// else
	// 	return <Login
	// 		onLoginPress={() => this.setState({isLoggedIn: true})}
	// 	/>;
 //
 //
	// }
 //
 // }

const AppStackNav = createStackNavigator({
  Home: {screen: Login},
  Signup:{screen: Signup },
  NewTweet:{screen:NewTweet },
  NewsFeed:{screen:NewsFeed },
});
const AppContainer = createAppContainer(AppStackNav)

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#364851',
     alignItems: 'center',
     justifyContent: 'center'

   },
 });



export default AppContainer;
