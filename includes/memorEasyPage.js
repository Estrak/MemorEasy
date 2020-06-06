import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MemorEasyHeader from './memorEasyHeader';

const MemorEasyPage = props => {
  return (
      <View>
        <MemorEasyHeader/>
        <Text>Test</Text>
        <View style={{...styles.boxContainer, ...props.style}}>
          {props.children}
        </View>
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
