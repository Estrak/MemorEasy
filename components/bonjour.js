import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import FirstScreen from './components/FirstScreen.js';
import Test from './components/Test.js';


export default function Bonjour() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  }
});
