import React, {useState} from 'react';
import { StyleSheet , View , ScrollView , Image , Text , FlatList , TouchableHighlight, StatusBar} from 'react-native';
import * as Font from 'expo-font';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppLoading } from 'expo';
import modulesData from './Helpers/modulesData.js';


const getFonts = () => Font.loadAsync({
    'Rubik': require('./assets/fonts/Rubik-Light.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <View
      style={{flex:0.99, backgroundColor:'#303030'}}
      >
      <StatusBar   
       hidden={true} />  
      <Header/>
        <FlatList 
          data={modulesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => 
            <TouchableHighlight style={styles.DivModule}
            onLongPress={() => alert(modulesData[item.id - 1].overview)} 
            underlayColor="white">
              <Text>{item.title}</Text>
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

  DivModule:{
    padding : 10,
    marginBottom: 8,
    backgroundColor: '#C4C4C4',
    width: 100,
    borderRadius: 10/2,
    opacity: 0.5,
    zIndex:1,
  },
  DivModuleUnder:{
   
    backgroundColor: '#C4C4C4',
    width: 100,
    borderRadius: 10/2,
    opacity: 0.5,
    zIndex: 0,
    position: 'absolute'
  },

})