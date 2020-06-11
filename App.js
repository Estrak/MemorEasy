import React, {useState} from 'react';
import { StyleSheet , View , ScrollView , Image , Text , FlatList , TouchableHighlight, StatusBar , Button , Alert , Modal, TextInput} from 'react-native';
import * as Font from 'expo-font';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppLoading } from 'expo';
import modulesData from './Helpers/modulesData.js';

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const getFonts = () => Font.loadAsync({
		'Rubik': require('./assets/fonts/Rubik-Light.ttf')
	});
	const [modalOpen, setModalOpen] = useState(false);

	var tab = 0;
	var arr = Array(3);
	var arr2 = Array(3);
	var arrstring = arr.toString()
	var arrstring2;
	var i;
	var j;
	var letter="";
	var word="";
	arr2.length = 3;
	
var classModules = (module) => {
	arr[tab] = module;
	arr.length = 3;
	tab++;
		if (tab == 3){
		var arrstring = arr.toString();
		Alert.alert("Les modules sélectionnés sont :",arrstring);
		}
}

var unfillarray = () => {
	if (tab => 3)
	{
		arr = ['','','']
		tab = 0;
	}
}

var retrievePhrase = (text) => {
	arr2 = ['','',''];
	j = 0;
	for (i = 0; i < text.length; i++){

		if ((text.charAt(i) == " ") || (text.charAt(i) == ".")){
			arr2[j] = word;
			letter = "";
			word = "";
			j++;
		}
		else {	
			letter = text.charAt(i)
			word += letter;
			letter = "";
		}
	}
}

	if(fontsLoaded){
		return (
			<View style={styles.BackgroundMemEasy}>
			<Modal visible={modalOpen} animationType="fade">
				<View style={styles.BackgroundMemEasy}>
			<Header/>
				<View style={styles.HeaderInfo}>
					<Text style={styles.HeaderInfoText}>
					Entrez votre phrase personnelle (3 mots) et terminez la<Text style={{fontWeight: "bold"}}> par un point</Text>. Encryptée par les modules, elle formera votre futur mot de passe.
					</Text>
				</View>
				<TextInput maxLength={15} style={styles.TextInputPhrase} onEndEditing={(e) => {retrievePhrase(e.nativeEvent.text)}} />
			<View style={{justifyContent:'flex-end'}}>
			<Button title="Valider" style={{height:50}} color="#c8e3af" onPress={() => alert(JSON.stringify(arr2))}/>
			<Button title="Retour" style={{height:50}} color="#FFD48E" onPress={() => setModalOpen(false)}/>
			</View>
			</View>
			</Modal>

			<StatusBar   
			 hidden={true} />  
			<Header/>
				<View style={styles.HeaderInfo}>
					<Text style={styles.HeaderInfoText}>
					Classez les modules algorithmiques selon votre choix. Les trois premiers seront pris en compte. Maintenez un module pour plus de détails sur celui-ci.
					</Text>
				</View>
				<FlatList contentContainerStyle={styles.Flatlist}
					data={modulesData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => 
						<TouchableHighlight style={styles.DivModule}
						onLongPress={() => Alert.alert("Description du "+modulesData[item.id - 1].title+" : ",
														modulesData[item.id - 1].overview,
														[{
												          text: "Données utilisées",
												          onPress: () => {Alert.alert("Données du "+modulesData[item.id - 1].title+" : ",
														modulesData[item.id - 1].donnee)}
												        },
												        { text: "Exemple", onPress: () => {Alert.alert("Exemple du "+modulesData[item.id - 1].title+" : ",
														modulesData[item.id - 1].exemple)} },
														],
													      { cancelable: true }
												      	)}
						onPress={() => {classModules(modulesData[item.id -1].title)}}  
						underlayColor="#D8DFE3">
							<Text style={{fontSize:13}}>{item.title}</Text>
						</TouchableHighlight>
					}
				/>
			<Button title="Suivant" style={{height:50}} color="#c8e3af" onPress={() => setModalOpen(true)}/>
			<Button title="Annuler" style={{height:50}} color="#FFD48E" onPress={() => {unfillarray()}} disabled={false}>
  		<Text style={{color:"black"}}>
  		Annuler
  		</Text>	
  		</Button>
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

	TextInputPhrase:{
		backgroundColor:'#6D6D6D',
		borderRadius:10/2,
		height:40,
		marginLeft:50,
		marginRight:50,
		marginTop:50,
		borderColor:'white',
		borderWidth:0.5,
		marginBottom:60,
		opacity:0.5,
		textAlign:'center'
	},

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
		paddingTop:45,
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
	},

	BackgroundMemEasy:{
		flex:1, 
		backgroundColor:'#303030'
	}
})