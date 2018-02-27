import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const logo = require('./assets/layer_10_logo.png');

export default class LoginScreen extends Component {
    
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </View>
            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.login}>
                    <Text style={styles.buttonText}>Logga in på Layer 10</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }

    login() {
        this.props.navigation.navigate('Users')
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
    header: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C51126',
    },
    content: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    button: {
        padding:20,
        backgroundColor:'#C51126',
        borderRadius:4,
    },
    buttonText: {
        fontSize:15,
        color:'white',
    },
    logo: {
        width: 150,
        resizeMode:'contain'
    }
})
