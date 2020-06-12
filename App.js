import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './screens/firstScreen.js';
import Presentation from './screens/presentation.js';
import HomePage from './screens/homePage.js';
import Train from './screens/train.js';
import CreationMDP from './screens/creationMDP.js';
import Modules from './screens/modules.js';

const Stack = createStackNavigator();

var first = 'true';

export default function App() {

  AsyncStorage.getItem('firstTime').then((value) => {first = ""+value});
  var page = (first == 'true') ? "firstScreen" : "homePage";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={page} screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='firstScreen'
          component={FirstScreen}
          options={{ title: 'Overview'}}/>
        <Stack.Screen
          name='presentation'
          component={Presentation}/>
        <Stack.Screen
          name="modules"
          component={Modules}/>
        <Stack.Screen
          name='homePage'
          component={HomePage}/>
        <Stack.Screen
          name='train'
          component={Train}/>
        <Stack.Screen
          name='creationMDP'
          component={CreationMDP}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
