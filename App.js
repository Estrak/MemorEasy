import React, {useState} from 'react';
import { StyleSheet , View , ScrollView , Image , Text , FlatList , TouchableHighlight, StatusBar} from 'react-native';
import * as Font from 'expo-font';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppLoading } from 'expo';
import modulesData from './Helpers/modulesData.js';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'


const getFonts = () => Font.loadAsync({
		'Rubik': require('./assets/fonts/Rubik-Light.ttf')
	});


export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if(fontsLoaded){
		return (
			<View
			style={{flex:1, backgroundColor:'#303030'}}
			>
			<StatusBar   
			 hidden={true} />  
			<Header/>
				<View style={styles.HeaderInfo}>
					<Text style={styles.HeaderInfoText}>
					Classez les modules algorithmiques selon votre choix. Les trois premiers seront pris en compte. Appuyez sans maintenir pour plus de détails sur le module.
					</Text>
				</View>
				<FlatList contentContainerStyle={styles.Flatlist}
					data={modulesData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => 
						<TouchableHighlight style={styles.DivModule}
						onPress={() => alert(modulesData[item.id - 1].overview)}
						onLongPress={() => alert("drag and drop")}  
						underlayColor="#D8DFE3">
							<Text style={{fontSize:16}}>{item.title}</Text>
						</TouchableHighlight>
					}
				/>
			<Footer/>
			</View>
		);
	} else {
		return (
		<AppLoading
			startAsync={getFonts}
			onFinish={()=> setFontsLoaded(true)}
		/>
		);
	}
	
}

const styles = StyleSheet.create({

	HeaderInfoText:{
		fontSize:15,
		textAlign:'justify',
		lineHeight: 19
	},

	HeaderInfo:{
		backgroundColor:"#C4C4C4",
		height:70,
		marginTop:50,
		marginLeft:10,
		marginRight:10,
		paddingLeft:12,
		paddingRight:12,
		justifyContent:'center',
		borderRadius: 10/2
	},

	Flatlist:{
		paddingTop:40,
		alignItems: 'center'
	},

	DivModule:{
		padding : 15,
		marginBottom: 20,
		backgroundColor: '#C4C4C4',
		width: 110,
		borderRadius: 10/2,
		opacity: 0.5,
		zIndex:1,
		alignItems: 'center'
	}

})