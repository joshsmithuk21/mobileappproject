import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import NewsFeed from './screens/NewsFeed';
import Login from './screens/Login';

export default class logincomponent extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn)
      return <NewsFeed
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }

}
