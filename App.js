import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/firstScreen.js';
import Presentation from './screens/presentation.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirstScreen>

    </FirstScreen>
  )
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  container: {
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
  },
});
