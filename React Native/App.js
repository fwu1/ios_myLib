
/**
 * code from : https://www.youtube.com/watch?v=hWJaAdWisiw&t=155s
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, NativeModules} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//var MyObjcClass = require('NativeModules').MyObjcClass;
var MyObjcClass = NativeModules.MyObjcClass;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      number:0
    }
  }

  render() {
    MyObjcClass.addEvent('Birthday Party', '4 Privet Drive, Surrey')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> {MyObjcClass.greeting}  to React Native!</Text>
        <TextInput style={styles.input} onChangeText={(text)=> this.squareMe(text)}/>
        <Text style={styles.result}>{this.state.number}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  squareMe(num) {
    if(num=='') {
      return;
    }
    MyObjcClass.squareMe(num,(error,result) => {
      this.setState({number: result});
    } )

  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  input: {
    textAlign: 'right',
    width:100,
    height:40,
    fontSize: 25,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center',
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,

  },
});
