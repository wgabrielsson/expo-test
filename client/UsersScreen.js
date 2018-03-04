import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {BASE_URL} from './constants';
export default class UsersScreen extends Component {

  static navigationOptions = {
    title: 'Users',
  };

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
  
  render() {
    const {users} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={users}
          renderItem={({item}) => {
            const fullName = `${item.firstName} ${item.lastName}`;
            return (
              <View>
                <Text>{fullName}</Text>
              </View>
            )
            }
          }
          keyExtractor={item => item._id}/>
      </View>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    const url = `${BASE_URL}/users`;
    try {
      const res = await fetch(url);
      if(res.status === 200) {
        const users = await res.json();
        this.setState({
          users: users,
        })
      } else {
        console.log("Could not fetch ussers");
      }
    }
    catch(err) {
      console.log("Could not fetch users:\n" + err);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})
