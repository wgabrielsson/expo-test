import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {BASE_URL} from './constants';

export default class CreateUserScreen extends Component {

    static navigationOptions = {
        title: 'Create User',
    };

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
        }
        this.createUser = this.createUser.bind(this);
        this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
        this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
    }
  
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleFirstNameChanged}
                    value={this.state.firstname}
                    placeholderTextColor={'#C51126'}
                    placeholder={'Firstname'}/>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleLastNameChanged}
                    value={this.state.lastname}
                    placeholderTextColor={'#C51126'}
                    placeholder={'Lastname'}/>
                <TouchableOpacity
                    onPress={this.createUser}
                    style={styles.button}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </View>
        );
    }

    handleFirstNameChanged(text) {
        this.setState({
            firstname: text,
        })
    }

    handleLastNameChanged(text) {
        this.setState({
            lastname: text,
        })
    }

    async createUser() {
        const url = `${BASE_URL}/users`;
        const data = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
        }
        try {
            const res = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                method: 'POST'
            })
            console.log(res);
            if(res.status === 200) {
                //Everything ok, reset state
                this.setState({
                    firstname: '',
                    lastname: '',
                })    
                this.showSuccess();
                
            } else {
                this.showError();
            }
            
        }
        catch(err) {
            //Something went wrong..
            console.log(err);
            this.showError();      
        }
    }

    showError() {
        Alert.alert(
            'Sorry...',
            'Could not create user',
            [ 
              {text: 'OK'},
            ],
            { cancelable: false }
        )
    }

    showSuccess() {
        Alert.alert(
            'Success',
            'User created',
            [ 
              {text: 'OK'},
            ],
            { cancelable: false }
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    input: {
        margin:20,
        alignSelf:'stretch',
        color: 'black',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        fontSize: 20
    },
    button: {
        flex:1,
    }
})
