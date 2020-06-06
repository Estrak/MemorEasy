import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class Header extends React.Component{


	render(){
	return(
	<View style={styles.Container}> 
    <View style={styles.divTinyLogo}>
      <Image style={styles.tinyLogo} source={require('../assets/img/logo.png')}/>
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
    height: 85,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },

  divTinyLogo:{
    width: 120,
    height: 120,
    borderRadius: 120/2,
    marginLeft: -12,
    marginTop: 30,
    backgroundColor: "#515151",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
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
    fontFamily: 'Rubik',  
  }
})

export default Header