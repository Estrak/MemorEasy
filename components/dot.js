import React from 'react';
import {View, StyleSheet} from 'react-native';


export default function Dot({isActive}) {
  return (
    <View style={[styles.dot, isActive ? {backgroundColor: "#fff"} : {backgroundColor:"#999"}]}/>
  );
}

const styles = StyleSheet.create({
  dot:{
    height: 8,
    width: 8,
    marginHorizontal: 5,
    backgroundColor: '#aaa',
    borderRadius:  4
  }
})
