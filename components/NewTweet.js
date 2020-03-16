import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>New Tweet</Text>
    // </View>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type your text here please!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }

  addItem(){
    return fetch("http://10.0.2.2:3333/list",
    {
      method: 'POST',
      body: JSON.stringify({
          id: this.state.id,
          item_name: item.name.first,
          subtitle : item.email,
          description: this.state.chit_content
                })
      })
      .then((response) => {
        Alert.alert("Item Added!");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
