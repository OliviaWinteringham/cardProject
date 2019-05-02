/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, TextInput, Button} from 'react-native';


class Location extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      locationName: '',
      category: '',
      location:'',
      trivia: '',
      }
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}



export default class App extends Component{
  render(){
    let pic = {
      uri: 'https://media.giphy.com/media/C8KAPsRKhmIAYXymrd/giphy.gif'
    };
    let newpic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
        <Text>This is a test for uploading info to mongodb location</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={newpic} style={{width: 200, height: 100, margin: 12}}/>
        <TextInput/>
      </View> 
    )
  }
}



// import React, {Component} from 'react';
// import { Button } from 'react-native';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}> Olivia </Text>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Button
//   title="This button does nothing"
//   color="#00ffff"
//   accessibilityLabel="Learn more about this purple button"
// />
// <Button
//   title="This is a 2nd button"
//   color="#ff00ff"
//   accessibilityLabel="Learn more about this purple button"
// />
// <Button
//   title="This is a 3rd button"
//   color="#ffff00"
//   accessibilityLabel="Learn more about this purple button"
// />
// <Button
//   title="This is a red button"
//   color="#ff0000"
//   accessibilityLabel="Learn more about this purple button"
// />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0000ff',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: "#f5f5f5"
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#808080',
//     marginBottom: 5,
//   },
// });
