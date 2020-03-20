import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert,AppRegistry, AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';
import NewsFeed from './screens/NewsFeed';
import NewTweet from './screens/NewChit';
import Signup from './screens/Signup';

const AppStackNav = createStackNavigator({ //created the navigation between components
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
