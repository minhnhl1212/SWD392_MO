import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle(isValid === false ? COLORS.gray : COLORS.primary)}>
      {loader === false ? (<Text style={styles.buttonText}>{title}</Text>)
      : (<ActivityIndicator />)
      }
        
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize: 18
    },
    buttonStyle: (backgroundColor) => ({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    })
})