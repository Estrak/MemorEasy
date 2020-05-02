import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  }
});


// export default function FirstScreen(){
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#303030"/>
//       <View>
//         <View style={styles.line}/>
//         <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>MemorEasy</Text>
//         <View style={styles.line}/>
//         <View style={{paddingLeft: 70, paddingRight: 70, marginTop: 70}}>
//           <Button onPress={begin()} title="Commencer" color="#7EB1BB"/>
//         </View>
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#303030',
//     justifyContent: 'center'
//   },
//   title: {
//     color: '#fff',
//     fontSize: 30,
//     textAlign: 'center'
//   },
//   line: {
//     height: 2,
//     marginLeft: 32,
//     marginRight: 32,
//     marginTop: 16,
//     marginBottom: 16,
//     backgroundColor: '#fff'
//   },
//   button: {
//     borderRadius: 2,
//     color: '#8EF1FF',
//     marginLeft: 30,
//     marginRight: 30
//   }
// });
