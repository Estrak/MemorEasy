import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet} from 'react-native';

export default function HomePage({navigation}){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#303030"/>
      <View>
        <View style={styles.line}/>
        <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>MemorEasy</Text>
        <View style={styles.line}/>
        <View style={{paddingHorizontal:70, marginTop: 70}}>
          <Button onPress={() => {navigation.navigate('presentation')}} title="Commencer" color="#7EB1BB"/>
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
