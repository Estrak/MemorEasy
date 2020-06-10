import React from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

var sentrainerPNG = require('../assets/imageButton/sentrainer.png'),
    modificationsPNG = require('../assets/imageButton/modifications.png'),
    creerunmotdepassePNG = require('../assets/imageButton/creerunmotdepasse.png');

/// direction = horizontal || vertical
export default function ImagedButton( { text, imageName, direction, backgroundColor, onPress }){

  switch (imageName) {
    case 'sentrainer':
      var imagePath = sentrainerPNG;
      break;
    case 'modifications':
      var imagePath = modificationsPNG;
      break;
    case 'creerunmotdepasse':
      var imagePath = creerunmotdepassePNG;
      break;
    default:
      var imagePath = sentrainerPNG;
  }

  // Comme il y a deux plateformes possibles, le contenu est créé en avance.
  var image =
    <View style={[styles.imageContainerBase,
        (direction=="horizontal" ? styles.imageContainerHori : styles.imageContainerVert)
      ]}>
      <Image style={[(direction=="horizontal" ? styles.imageHori : styles.imageVert)]} source={imagePath}/>
    </View>;


  var content =
    <View
      style={[styles.buttonBase, {backgroundColor: backgroundColor},
        (direction=="horizontal" ? styles.buttonHori : styles.buttonVert)
      ]}>
      <View>
        {image}
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>;


  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("#fff",false)}
        >
        {content}
      </TouchableNativeFeedback>
    )
  }else {
    return(
      <TouchableHighlight
        onPress={onPress}
        >
        {content}
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  // BASE
  imageContainerBase:{
    backgroundColor: "#E6E9ED",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 8,
    textAlign: 'center',
    marginBottom: 3,
    fontSize: 24,
  },
  buttonBase: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent: 'space-between',
  },

  // HORIZONTAL
  imageContainerHori:{
    width: 62,
    height: 53,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  imageHori:{
    width: 42,
    height: 42,
  },
  buttonHori:{
    flexDirection: 'row',

    alignItems: 'center',

    height: 53,
    maxHeight: 53,

    borderRadius: 18,
  },

  // VERTICAL
  imageContainerVert:{
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageVert: {
    width: 70,
    height: 70,
  },

  buttonVert: {
    paddingVertical: 12,
    paddingHorizontal: 12,

    alignItems: 'center',

    maxWidth: 180,
    width: 180,

    borderRadius: 18,
  }
})
