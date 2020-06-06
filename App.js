import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/firstScreen.js';
import Presentation from './screens/presentation.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='firstScreen'
          component={FirstScreen}
          options={{ title: 'Overview'}}/>
        <Stack.Screen
          name='presentation'
          component={Presentation}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
