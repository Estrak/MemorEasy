import React from 'react';
import {View , Text, Button, StatusBar, StyleSheet} from 'react-native';

import MemorEasyPage from '../includes/memorEasyPage.js';

export default function HomePage({navigation}){
  return (
    <MemorEasyPage>
      <Text>Testeeeeeeezze</Text>
    </MemorEasyPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'center'
  }
});
