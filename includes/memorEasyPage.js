import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MemorEasyHeader from '../includes/memorEasyHeader.js';

const MemorEasyPage = props => {
  return (
      <View style={{...styles.boxContainer, ...props.style}}>
        <MemorEasyHeader/>
        <Text>Test</Text>
        {props.children}
      </View>
    );
};

const styles = StyleSheet.create({
  boxContainer:{
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height:200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MemorEasyPage;
