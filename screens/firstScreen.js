import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet, AsyncStorage} from 'react-native';
import FlatButton from './../components/flatButton.js';

var first = 'true';

export default function FirstScreen({navigation}){

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#303030"/>
      <View>
        <View style={styles.line}/>
        <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>MemorEasy</Text>
        <View style={styles.line}/>
        <View style={styles.button}>
          <FlatButton
            text="Commencer"
            backgroundColor='#7EB1BB'
            color='#202020'
            type="solid"
            onPress={() => {

              AsyncStorage.getItem('firstTime').then((value) => {first = ""+value});
              if(first == 'true'){ //si première navigation --> tutoriel

              navigation.navigate('presentation');
            }else { //si on a déjà vu le tuto --> ....
              navigation.navigate('homePage');
            }
          }} />
        </View>
      </View>
    </View>
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
    marginVertical: 16,
    marginHorizontal: 32,
    backgroundColor: '#fff'
  },
  button: {
    marginHorizontal: 50,
    marginVertical:32
  }
});
