import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createNewUser } from './restApi'


/**
 * Component with state. Gets life cycle methods from React.Component along with render.
 */
export default class CreateUserScreen extends Component {

    static navigationOptions = {
        title: 'Create User',
    };

    constructor(props) {
        super(props);
        // This components default state gets initialized. Not necessary but got for nulltype safety and readability.
        this.state = {
            firstname: '',
            lastname: '',
            loading: false,
        }

        // This components methods gets "this" bound to them so that
        // they only refers to this component and not the one calling.
        this.createUser = this.createUser.bind(this);
        this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
        this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
    }

    // Component specific methods.
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
  
    // The render method called to write the component to app. The return contains component mark up.
    render() {

        // Define "good to have" varaiables and methods used within the component markup in return statement.
        // Not necessary but a nice way to keep komplex varaiable composistion away from markup.
        const name = `${this.state.firstname} ${this.state.lastname}`

        // The mark up returned when component gets rendered.
        return (
            <View style={styles.container}>
                <TextInput
                    // Props gets passed to this component.
                    style={styles.input}
                    onChangeText={this.handleFirstNameChanged} // <--- Here we pass a function to another component.
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
                    style={styles.button}
                    onPress={this.createUser}>
                    <Text style={styles.buttonText}>
                        Lägg till {name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * Method for making rest call and creating user.
     */
    async createUser() {
        if (this.state.loading) return
        
        const user = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
        }
        try {
            const res = await createNewUser(user)
            if(res.status === 200) {
                //Everything ok, reset state
                this.setState({
                    firstname: '',
                    lastname: '',
                })    
                this.showAlert('Done!', 'User created!');
                
            } else {
                throw new Error('Rest called failed with status code: ', res.status);
            }
        }
        catch(err) {
            //Something went wrong.
            console.log(err);
            this.showAlert('Ooops...', 'Something went wrong.');      
        }
    }

    /**
     * Generic alert function for showing alerts to user.
     * */
    showAlert(title, info) {
        Alert.alert
        (
            title,
            info,
            [{text: 'OK'}],
            { cancelable: false }
        )
    }
}

// Stylesheet for this perticular component.
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
        padding:20,
        backgroundColor:'#C51126',
        borderRadius:4,
        width: 200,
        margin: 10
    },
    buttonText: {
        fontSize:15,
        color:'white',
        textAlign: 'center',
    },
})
