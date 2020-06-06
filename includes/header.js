import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class MemorEasyHeader extends React.Component {
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
