import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

export default function FlatButton( { text, backgroundColor, color, type, style, onPress }){
  if (Platform.OS === 'android') {
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
  }else {
    return(
      <TouchableHighlight
        onPress={onPress}
        >
        <View style={[styles.button,style, (type=="outline" ? {borderColor: backgroundColor, borderWidth: 2} : {backgroundColor: backgroundColor})]}>
          <Text style={[styles.buttonText, {color: color}]}>{ text }</Text>
        </View>
      </TouchableHighlight>
    )
  }
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
