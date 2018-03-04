import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import UsersScreen from './UsersScreen';
import CreateUserScreen from './CreateUserScreen';
const RootStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  CreateUser: {
    screen: CreateUserScreen,
  },
  initialRouteName: 'Login',
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
