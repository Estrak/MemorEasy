import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class MemorEasyHeader extends React.Component{
	render(){
	return(
	<View style={styles.Container}>
    <View style={styles.divTinyLogo}>
      <Image style={styles.tinyLogo} source={require('../assets/splash.png')}/>
  	</View>
    <View style={styles.divTitleText}>
    <Text style={styles.titleText}>Memor'Easy</Text>
    </View>
  </View>
		);
	}

}

const styles = StyleSheet.create({

  Container:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#515151",
    height: 105,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    paddingTop: 20
  },

  divTinyLogo:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: -12,
    marginTop: 30,
    backgroundColor: "#515151",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,

    shadowColor: 'black',
    shadowOffset: { width: -2, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 10
  },

  tinyLogo: {
    width: 90,
    height: 90,
  },

  divTitleText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F4F4F4",
    letterSpacing: 1,
    //fontFamily: 'Rubik',
  }
})
