import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MemorEasyHeader from './memorEasyHeader';
import MemorEasyFooter from './memorEasyFooter';

const MemorEasyPage = props => {
  return (
      <View style={styles.globalPage}>
        <MemorEasyHeader/>
        <View style={{...styles.boxContainer, ...props.style}}>
          {props.children}
        </View>
        <MemorEasyFooter/>
      </View>
    );
};

const styles = StyleSheet.create({
  globalPage:{
    flex: 1,
    backgroundColor: 'blue',
  },
  boxContainer:{
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
