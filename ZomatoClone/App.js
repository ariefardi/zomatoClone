/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation })=> ({
      title: 'Zomato'
    })
  }
},
{
   initialRouteName: 'Home'
})
export default class App extends Component {
  render () {
    return (
      <RootStack />
    )
  }
}

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
});
