import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, StatusBar, AsyncStorage} from 'react-native';
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

let phrase;
AsyncStorage.getItem('phraseUt').then((value) => {phrase = ""+value});

export default function CreationMDP({navigation}){

  AsyncStorage.getItem('phraseUt').then((value) => {phrase = ""+value});
  //ces infos faut arriver les récupérer de je ne sais où (pas le nom du site à priori)
  let suiteModules=[ModuleC1,ModuleM1];
  let separateur='*';

  const [site, SetSite] = useState("");
  const [mdp, SetMDP] = useState("");

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
      footerContent= {footerContent}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#303030"/>
        <View>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', paddingBottom: 15}}>
            Phrase : {phrase}
          </Text>
          <View style={styles.line}/>
          <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
            Site : {site}
          </Text>
          <Text style={{color: '#fff', fontSize: 20, textAlign: 'center', paddingTop:5}}>
            MDP : {mdp}
          </Text>
          <View style={styles.line}/>
          <View style={{paddingHorizontal:50, paddingTop: 65}}>

            <TextInput
            style={{ height: 40, minWidth: 200, borderBottomColor: 'white', color: 'white', borderBottomWidth: 1 }}
            placeholder="Entrez le nom du site/app"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => {
              SetSite(text);
              SetMDP(CalculMdp(phrase, site, separateur, suiteModules));
            }}
            />
          </View>
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
