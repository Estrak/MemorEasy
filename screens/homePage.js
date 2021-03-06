import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet} from 'react-native';
import FlatButton from './../components/flatButton.js';

import ImagedButton from './../components/imagedButton.js';
import MemorEasyPage from '../includes/memorEasyPage.js';

export default function HomePage({navigation}){
  // Pour ajouter des boutons dans le footer.
  var footerContent = <ImagedButton
    text= "Modifications"
    direction="horizontal"
    imageName= "modifications"
    backgroundColor='#FFE074'
    onPress={ () => {
      navigation.navigate('modules')
    } }/>;

  return (
    // Ajout du Header + Footer

    <MemorEasyPage style={styles.page}
      footerContent={footerContent}>

      <ImagedButton
        text= "S'entrainer !"
        imageName= "sentrainer"
        backgroundColor='#51CBE5'
        onPress={ () => {
          navigation.navigate('train')
        } }/>

      <ImagedButton
        text= "Créer un Mot de passe !"
        direction="vertical"
        imageName= "creerunmotdepasse"
        backgroundColor='#54EB75'
        onPress={ () => {
          navigation.navigate('creationMDP')
        } }/>
    </MemorEasyPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'center'
  },

  page: {
    justifyContent: 'space-around'
  }
});
