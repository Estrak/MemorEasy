import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, StatusBar, Alert, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*import './functions/functions.js';
import './functions/modules.js';
import Creation from './screens/creation.js';
import Entrainement from './screens/entrainement.js';*/
import {ModuleC1 , ModuleC2, ModuleC3, ModuleL1, ModuleL2,
  ModuleM1, ModuleCS1, siteAleat, SiteAleat, CalculMdp,
  calculMdp, hasard, Hasard} from '../functions/modules.js';

import ImagedButton from './../components/imagedButton.js';
import FlatButton from './../components/flatButton.js';
import MemorEasyPage from '../includes/memorEasyPage.js';
const Stack = createStackNavigator();

//récupérer les bonnes infos
let suiteModules=[ModuleC1,ModuleM1];
let phrase;
AsyncStorage.getItem('phraseUt').then((value) => {phrase = ""+value});
let separateur='*';

export default function Train({navigation}) {
  const [siteAleat, SetSite] = useState(SiteAleat());
  const [mdp, SetMDP] = useState(CalculMdp(phrase, siteAleat, separateur, suiteModules));
  var sTmdp = "";

  // Pour ajouter des boutons dans le footer.
  var footerContent = <ImagedButton
    text= "Accueil"
    direction="horizontal"
    imageName= "home"
    backgroundColor='#FFE074'
    onPress={ () => navigation.navigate('homePage') }/>;

  return (
    <MemorEasyPage
      style={styles.container}
      footerContent={footerContent}>
      <StatusBar barStyle="light-content" backgroundColor="#303030"/>
      <View>
        <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', paddingBottom: 15}}>
          Phrase : {phrase}
        </Text>

        <View style={styles.line}/>
        <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
          Site : {siteAleat}
        </Text>
        <View style={styles.line}/>
        <View style={{paddingHorizontal:60, marginTop: 50}}>
            <TextInput
            style={{ height: 40, color:'white', borderBottomColor: 'white', borderBottomWidth: 1 }}
            placeholder="Entrez votre proposition"
            placeholderTextColor='#ffffff'
            onChangeText={(text) => sTmdp = text}
            />
            <FlatButton
              style={{marginTop: 15}}
              text="Confirmer"
              backgroundColor='#8EF1FF'
              color='#202020'
              type="solid"
              onPress={ () => {
                if(sTmdp == mdp){
                  alert("Bien joué !");
                }
                else{
                  alert("Non ! Le mot de passe avec les modules choisis est :"+mdp);
                }
              }} />
            <FlatButton
              style={{marginTop: 15}}
              text="Changer de site"
              backgroundColor='#8EF1FF'
              color='#FFFFFF'
              type="outline"
              onPress={ () => {
                SetSite(SiteAleat());
                SetMDP(CalculMdp(phrase, siteAleat, separateur, suiteModules));
                sTmdp = "";
              }} />
        </View>
      </View>
    </MemorEasyPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  line: {
    height: 2,
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  button: {
    borderRadius: 2,
    color: '#8EF1FF',
    marginLeft: 30,
    marginRight: 30
  }
});
