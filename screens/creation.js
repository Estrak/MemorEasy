import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet, TextInput} from 'react-native';
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

export default function Creation({navigation}){

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#303030"/>
      <View>
        <View style={styles.line}/>
        <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>MemorEasy</Text>
        <View style={styles.line}/>
        <View style={{paddingHorizontal:70, marginTop: 70}}>
          <TextInput
          style={{ height: 40, borderBottomColor: 'black', borderBottomWidth: 1 }}
          placeholder="Entrez le nom du site/app"
          onChangeText={(text) => this.setState({text})}
          />
          <Text>
          {CalculMdp(this.state.text)}  //ça je comprends pas comment ça marche c'est probablement pas ça
          </Text>
        </View>
      </View>
    </View>
    <View> //ça c'est juste pour voir si ça fonctionne
      <Text>TEST DES FONCTIONS</Text>
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

//ces infos faut arriver les récupérer de je ne sais où (pas le nom du site à priori)
let suiteModules=[ModuleC1,ModuleM1];
let phrase='J aime le chocolat';
let nomSite='Amazon';
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
