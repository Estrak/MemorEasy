import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class Footer extends React.Component{


	render(){
	return(
	<View style={styles.Container}> 
  
  </View>
		);
	}

}

const styles = StyleSheet.create({

  Container:{
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: "#515151", 
    height: 50,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: '#212121',
    borderWidth: 0.25
  },
})

export default Footer