import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*import './functions/functions.js';
import './functions/modules.js';
import Creation from './screens/creation.js';
import Entrainement from './screens/entrainement.js';*/
import CalculMdp from './functions/calculMdp.js';
import Hasard from './functions/hasard.js';
import ModuleC1 from './functions/moduleC1.js';
import ModuleC2 from './functions/moduleC2.js';
import ModuleC3 from './functions/moduleC3.js';
import ModuleCS1 from './functions/moduleCS1.js';
import ModuleL1 from './functions/moduleL1.js';
import ModuleL2 from './functions/moduleL2.js';
import ModuleM1 from './functions/moduleM1.js';
import SiteAleat from './functions/siteAleat.js';

const Stack = createStackNavigator();

export default function App() {

  const code1=ModuleC1(phrase, nomSite, separateur);
  const code2=ModuleM1(phrase, nomSite, separateur);
  const code3=CalculMdp(nomSite, phrase, separateur, suiteModules);
  const code4=ModuleC2(phrase, nomSite, separateur);
  const code5=ModuleC3(phrase, nomSite, separateur);
  const code6=ModuleL1(phrase, nomSite, separateur);
  const code7=ModuleL2(phrase, nomSite, separateur);
  const code8=ModuleCS1(phrase, nomSite, separateur);
  const aleat=SiteAleat();
  const code9=CalculMdp(phrase, aleat, separateur, suiteModules);

  return (/*<NavigationContainer>
      <Stack.Navigator initialRouteName="creation">
        <Stack.Screen
          name='creation'
          component={Creation}
          options={{ title: 'Overview'}}/>
        <Stack.Screen
          name='entrainement'
          component={Entrainement}/>
      </Stack.Navigator>
    </NavigationContainer> */

    <View style={styles.container}>
      <Text>Amazon --> {code3}</Text>
      <Text>C1 : {code1} (114)</Text>
      <Text>M1 : {code2} (n*am*n*ooa)</Text>
      <Text>C2 : {code4} (4)</Text>
      <Text>C3 : {code5} (6)</Text>
      <Text>L1 : {code6} (amooa)</Text>
      <Text>L2 : {code7} (jilc)</Text>
      <Text>CS1 : {code8} (-)</Text>
      <Text>{aleat} --> {code9}</Text>
    </View>
  );
}

let suiteModules=[ModuleC1,ModuleM1];
let phrase='J aime le chocolat';
let nomSite='Amazon';
let separateur='*';



//---------------Style---------------\\
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
