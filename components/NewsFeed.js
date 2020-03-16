import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
    ScrollView,
    Text,
    View,
    Button,
	FlatList,
	ActivityIndicator,
	Image,
	StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NewTweet from './NewTweet';

export default class NewsFeed extends Component {
  constructor(props){
    super(props);
    this.state ={
	isLoading: true,
	data:[]	} 	    //anything added to this array will then show in the this.state.data line below


    }


deleteItem(id){
  return fetch('http://10.0.2.2:3333/list/' + id, {
      method: 'delete'
    })
    .then((response) => {
      this.getData();
    })
    .then((response) => {
      Alert.alert("Item deleted")
    })
    .catch((error) =>{
      console.log(error);
    });
  }

    fetchData = async () => {
      const response = await fetch('http://10.0.2.2:3333/api/v0.0.5/chits');
      const json = await response.json();
      this.setState({
          isLoading: false,
          data: json.results });
    };

    componentDidMount(){
      this.fetchData();
    }

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 5  ,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '15%'
          }}
        />
      );
    };

    render() {
  		if (this.state.loading) {
  			return (

  				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
  					<ActivityIndicator

             />
  				</View>
  			);
  		}
  		return (
  			<View style={{ flexGrow: 0, paddingBottom:300 }}>
        <Image style={{width: 400, height: 160}} source={require('../images/welcomebanner1.jpg')} />
  				<FlatList
  					data={this.state.data}
  					renderItem={({ item }) => (
  						<TouchableOpacity>
  							<ListItem
  								onPress={() => alert("View Profile")}
  				//				leftAvatar={{ source: { uri: item.picture.thumbnail } }} //If the users have profile pictures
  								title={`${item.given_name} ${item.family_name}`}
  								subtitle={item.email}
                 />
                 <ListItem
                   title={item.chit_content}
                   />
  						</TouchableOpacity>

  					)}

  					keyExtractor={({id}, item) => id}
  					ItemSeparatorComponent={this.renderSeparator}
  							initialNumToRender={15}
  					maxToRenderPerBatch={2}
  					removeClippedSubviews={true}
  					onEndReachedThreshold={0.5}
  					onEndReached={() => alert('Please Refresh For More Tweets')}
  				/>


        <View style={{margin:20,flex:1}} />

            <Button
               title="New Tweet"
               onPress={() => this.props.navigation.navigate('NewTweet')}
               />

        <View style={{margin:10,flex:1}} />
                   <Button
           onPress={this.props.onLogoutPress}
           title="Logout"
             />

      	</View>
  		);
  	}
  }
