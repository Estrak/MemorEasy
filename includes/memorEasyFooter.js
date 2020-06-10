import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function MemorEasyFooter( { content }){
	return(
	<View style={styles.Container}>
    {content}
  </View>
		);
}

const styles = StyleSheet.create({

  Container:{
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#515151",
    height: 80,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: '#212121',
    borderWidth: 0.25
  },
})
