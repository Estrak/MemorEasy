import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

export default function FlatButton( { text, backgroundColor, color, type, style, onPress }){
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple("#fff",false)}
      >
      <View style={[styles.button,style, (type=="outline" ? {borderColor: backgroundColor, borderWidth: 2} : {backgroundColor: backgroundColor})]}>
        <Text style={[styles.buttonText, {color: color}]}>{ text }</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})
