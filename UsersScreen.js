import React, { Component } from 'react';
import { View, Text } from 'react-native';
    
export default class UsersScreen extends Component {
  static navigationOptions = {
    title: 'Users',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Users Screen</Text>
      </View>
    );
  }
}
