import React, { Component } from 'react';
import { Dimensions ,View, Text, StyleSheet, FlatList } from 'react-native';
import LayerTenHeader from './components/LayerTenHeader'
import { getAllUsers } from './restApi'


export default class UsersScreen extends Component {

  static navigationOptions = {
    title: 'Users'
  };

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    }

    this.fetchUsers = this.fetchUsers.bind(this)
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
          refreshing={this.state.loading}
          onRefresh={this.fetchUsers} // <--- Method call when drag and drop list.
          renderItem={({item}) => renderUser(item)} // <--- Render method called for rendering each item in data list.
          keyExtractor={item => item._id}/>
      </View>
    );
  }

  /**
   * Lifecycle method that gets called when component is mounted and ready.
   */
  componentDidMount() {
    this.fetchUsers();
  }

  /** 
   * Method for collecting all users. Restcall is made here.
  */
  async fetchUsers() {
    try {

      this.setState({loading: true})
      const res = await getAllUsers();
      this.setState({loading: false})

      if(res.status === 200) {
        const users = await res.json();
        this.setState({
          users: users,
        })
      }
    } catch(err) {}
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
    margin: 10,
  }
})

const renderUser = (user) => {
  return (<Text style={styles.userText}>{user.firstName} {user.lastName}</Text>)
}