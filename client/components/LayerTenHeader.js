import React from 'react'
import { Dimensions ,View, Text, StyleSheet } from 'react-native'

export default ({
  title
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </View>
)

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#C51126',
    height: windowHeight / 8,
    width: windowWidth,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  }
})