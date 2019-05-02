/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const API = "http://localhost:5000"

export default class Trivia extends Component{
    constructor(props){
      super(props);
      this.state={
        id: '',
        locationName: '',
        category: '',
        trivia: '',
      }
    }

    
      fetch ("http://localhost:5000/locations", {
        method: "POST",
        headers: { 
          Accept: "application/json", 
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          id: this.state.id,
          locationName: this.state.locationName,
          category: this.state.category,
          trivia: this.state.trivia,
        }),
      });


    // onChange = e => {
    //   this.setState({[e.target.name]: e.target.value})
    // };

    render() {
    return (
      <View style={{padding: 20}}>
        <TextInput
          style={{height: 40, margin: 50}}
          placeholder="enter the location"
          onChangeText={(locationName) => this.setState({locationName})}
        />
        <Text style={{paddingTop: 50, fontSize: 42}}>
        </Text>
      </View>
    );
  }
}