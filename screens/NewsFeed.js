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
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from "@react-navigation/core";

import NewTweet from './NewChit';
import Login from './Login';


const  id = AsyncStorage.getItem("id")
class NewsFeed extends Component {
  constructor(props){
    super(props);
    this.state ={
	isLoading: true,
	data:[]	} 	   //anything added to this array will then show in the this.state.data line below

    }

deleteItem(id){
  return fetch('http://10.0.2.2:3333/api/v0.0.5/' + id, {
      method: 'delete'
    })
    .then((response) => {
      this.getData();
    })
    .then((response) => {
      Alert.alert("User deleted")
    })
    .catch((error) =>{
      console.log(error);
    });
  }

    fetchData = async (done) => {
      const response = await fetch('http://10.0.2.2:3333/api/v0.0.5/chits');
      const json = await response.json();
      this.setState({
          isLoading: false,
          data: json
      },
      () => {
        done();
      });
    };

    componentDidMount(){
      this.fetchData(() => {
        console.log("CB", this.state.isLoading);
      });
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 5  ,
              width: '100%',
              backgroundColor: '#db0000',

            }}
          />
        );
      };


    render() {
  		if (this.state.loading) {
  			return (

  				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#59cbbd'}}>
  					<ActivityIndicator/>
  				</View>
  			);
  		}else{
        console.log("DATA", this.state.data[0]);
    		return (
    			<View style={{ flexGrow: 1, paddingBottom:300 }}>
          <Image style={{width: 400, height: 160}} source={require('../images/welcomebanner1.jpg')} />
    				<FlatList style = {{height: 400}}
    					data={this.state.data}
    					renderItem={({ item }) => (
    						<TouchableOpacity style ={styles.chits}>
    							<ListItem
                   onPress={() => alert("View Profile")}
                    leftAvatar={{ source:{uri:item.user.thumbnail}}}
    								title={`${item.user.given_name} ${item.user.family_name}`}
    								subtitle={item.user.email}

                   />
                   <ListItem
                  title={item.chit_content}
                     />
    						</TouchableOpacity>

    					)}

    					keyExtractor={({id}, item) => id}
    					ItemSeparatorComponent={this.renderSeparator}
    					ListHeaderComponent={this.renderHeader}
    					initialNumToRender={10}
    					maxToRenderPerBatch={2}
    					removeClippedSubviews={true}
    					onEndReachedThreshold={0.5}
    					onEndReached={() => alert('Please Refresh For More Tweets')}
    				/>


          <View style={{flex:1}} />

            <Button
               title="New Tweet"
               onPress={() =>  this.props.navigation.navigate('NewTweet')}
               />
          <View style={{margin:10,flex:1}} />
           <Button
              title="Logout"
                 onPress={() => this.props.navigation.navigate('Login')}
                 />
        	</View>
    		);
    }
  	}
  }




export default NewsFeed;
const styles = StyleSheet.create({
  chits: {
    backgroundColor: '#db0000',
    borderBottomColor: '#a19187',
    color: '#a19187',

  },
  btn:{
    color: '#a19187',
  },

})
