import React from 'react'
import { Dimensions ,View, Text, StyleSheet } from 'react-native'

/**
 * Stateless component. Has no internal state and no logic. Props gets destructured.
 */
export default ({
  title // <---- Destructured property passed to component.
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </View>
)

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// Stylesheet for this perticular component alone.
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