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

        <MemorEasyFooter
          content={props.footerContent}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  globalPage:{
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'space-between',
  },
  boxContainer:{
    flex: 1,
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MemorEasyPage;
