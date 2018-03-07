import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import UsersScreen from './UsersScreen';
import CreateUserScreen from './CreateUserScreen';

 /**
  * Using stacknavigator to wrap applications screens and enable navigation between them.
  * 
  * Screens is handled like cards in a stack ([stack]navigator) on top of 
  * each other and removed in same order when backing from screen.
  */
const RootStack = StackNavigator({
  // Add screens that are to be used in application. The navigator knows them later on by the property name.
  Login: {
    screen: LoginScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  CreateUser: {
    screen: CreateUserScreen,
  },
  initialRouteName: 'Login', // <--- This is the screen thats loaded on default by the stacknavigator.
});

// Initiate the app.
export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
