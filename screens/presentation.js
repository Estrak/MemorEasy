import React, {useState} from 'react';
import {Image, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import FlatButton from './../components/flatButton.js';
import Dot from './../components/dot.js';

const text = [
  "MemorEasy est une application aidant la génération de mot de passe personnalisé et facile à retrouver.",
  "La création d’un mot de passe avec Memor’Easy se fait à partir d’une phrase simple, courte et personnelle, du nom du site et de plusieurs règles (modules) qui génèrent des caractères.",
  "",
  "Cette méthode permet de générer des mots de passe complexe avec des lettres, des chiffres et des caractères spéciaux.",
  "Il vous suffit de retenir votre phrase perso et les modules que vous utilisez.",
  "Pour finir la configuration de l’application choisissez vos modules et entrer votre phrase en appuyant sur Continuer."
];

export default function Presentation({navigation}){

  AsyncStorage.setItem('firstTime','false');

  const [num, SetNum] = useState(0);
  return (
    <View style={styles.main}>
      <View  style={styles.container}>
        { num==2
          ? <Image style={styles.image} source={require('./../components/schema.gif')}/>
          : <Text style={styles.text}>{text[num]}</Text>
        }
      </View>
      <View style={styles.dots}>
        <Dot isActive={num==0}/>
        <Dot isActive={num==1}/>
        <Dot isActive={num==2}/>
        <Dot isActive={num==3}/>
        <Dot isActive={num==4}/>
        <Dot isActive={num==5}/>
      </View>
      <View style={styles.buttonLeft}>
        <FlatButton
          text= "Précédent"
          backgroundColor='#8EF1FF'
          color='#8EF1FF'
          type="outline"
          style={num>0 ? {opacity:1} : {opacity:0}}
          onPress={ () => {num>0 ? SetNum(num-1) : null} } />
      </View>
      <View style={styles.buttonRight}>
        <FlatButton
          text={num==5 ? "Continuer" : "Suivant"}
          backgroundColor='#8EF1FF'
          color='#202020'
          type="solid"
          onPress={ () => {
            if(num==5){
              navigation.navigate('firstScreen') // TODO: changer
            }else{
              SetNum(num+1)
            }
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#303030",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    width: "80%",
    height: "60%",
    backgroundColor: '#7A7A7A',
    justifyContent: 'center'
  },
  text:{
    paddingLeft: "10%",
    paddingRight: "10%",
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28
  },
  buttonRight:{
    position: "absolute",
    bottom: 16,
    right: 16
  },
  buttonLeft:{
    position: "absolute",
    bottom: 16,
    left: 16
  },
  dots:{
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 50
  },
  image:{
    width:"95%",
    height: "80%",
    resizeMode: "stretch",
    alignSelf:"center",
  }
});
