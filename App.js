import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './functions/functions.js';
import './functions/modules.js';
import Creation from './screens/creation.js';
import Entrainement from './screens/entrainement.js';

const Stack = createStackNavigator();

export default function App() {

  return (<NavigationContainer>
      <Stack.Navigator initialRouteName="creation">
        <Stack.Screen
          name='creation'
          component={Creation}
          options={{ title: 'Création'}}/>
        <Stack.Screen
          name='entrainement'
          component={Entrainement}
          options={{title: 'Entrainement'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

//---------------Style---------------\\
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
