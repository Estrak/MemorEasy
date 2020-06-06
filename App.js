import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './screens/firstScreen.js';
import Presentation from './screens/presentation.js';
import HomePage from './screens/homePage.js';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator //Pour cacher la barre supérieure avec le nom des menus
            screenOptions={{
              headerShown: false
            }}
          >
          <Stack.Screen
            name='homePage'
            component={HomePage}/>
            <Stack.Screen
              name='firstScreen'
              component={FirstScreen}
              options={{ title: 'Overview'}}/>

            <Stack.Screen
              name='presentation'
              component={Presentation}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
