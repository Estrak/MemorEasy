import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet} from 'react-native';
import CalculMdp from '../functions/calculMdp.js';
import Hasard from '../functions/hasard.js';
import ModuleC1 from '../functions/moduleC1.js';
import ModuleC2 from '../functions/moduleC2.js';
import ModuleC3 from '../functions/moduleC3.js';
import ModuleCS1 from '../functions/moduleCS1.js';
import ModuleL1 from '../functions/moduleL1.js';
import ModuleL2 from '../functions/moduleL2.js';
import ModuleM1 from '../functions/moduleM1.js';
import SiteAleat from '../functions/siteAleat.js';

export default function Entrainement({navigation}){
  const siteAleat = SiteAleat();
  const mdp = CalculMdp(phrase, siteAleat, separateur, suiteModules)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#303030"/>
      <View>
        <View style={styles.line}/>
        <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>MemorEasy</Text>
        <View style={styles.line}/>
        <View style={{paddingHorizontal:70, marginTop: 70}}>
            <Text>Nom du site : {siteAleat}</Text>
            <TextInput
            style={{ height: 40, borderBottomColor: 'black', borderBottomWidth: 1 }}
            placeholder="Entrez votre proposition de mot de passe"
            onChangeText={(text) => this.setState({text})}
            />
            <Text>
            {this.state.text==mdp ? "Bien joué !" : "Non ! Le mot de passe avec les modules choisis est :"+mdp ;}   //je suis perplexe
            </Text>
        </View>
      </View>
    </View>
  );
}

//récupérer les bonnes infos
let suiteModules=[ModuleC1,ModuleM1];
let phrase='J aime le chocolat';
let separateur='*';

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
