import React, { Component } from 'react';
import { Dimensions ,View, Text, StyleSheet, FlatList } from 'react-native';
import LayerTenHeader from './components/LayerTenHeader'
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
        <LayerTenHeader title='Vi är Layer10'/>
        <FlatList
          style={styles.list}
          automaticallyAdjustContentInsets={false}
          data={users}
          renderItem={({item}) => renderUser(item)}
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

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  list: {
    marginTop: windowHeight / 8,
    width: windowWidth,
  },
  userText: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    margin: 5,
  }
})

const renderUser = (user) => {
  return (<Text style={styles.userText}>{user.firstName} {user.lastName}</Text>)
}