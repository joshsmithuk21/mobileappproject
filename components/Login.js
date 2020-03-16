import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
	Image
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>

                <Image
					style={{width: 200, height: 200,marginLeft: 70,marginBottom: 100 }}
					source={require('../images/chittrlogo.png')}
				/>
                <TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2,  marginBottom: 20,marginLeft: 5 }}
				   placeholder="Username"
				   placeholderTextColor="#000000"
				   secureTextEntry ={false}
				   autoCorrect={false} />

				<TextInput
				   style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, marginLeft: 5 }}
				   placeholder="Password"
				   placeholderTextColor="#000000"
				   secureTextEntry ={true}
				   password={true}
				   autoCorrect={false}
			/>

                <View style={{ height: 100}} />
                <Button
					      onPress={this.props.onLoginPress}
                          title="Submit"
                      />


                <View style={{paddingTop: 10}} />
                <Button
					      onPress={this.props.onSignUpPress}
                          title="Sign Up"
                      />
                  </ScrollView>
            )
		}
	}
