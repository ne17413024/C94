import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert
} from "react-native";

// ...resto del código de inicialización de Firebase

import firebase from "firebase";



import AppHeader from '../components/AppHeader'; //el header 

export default class PerfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
    };
  }

  Prueba = () =>
    Alert.alert('Seguro que quieres Cerrrar secion', '', [
      {
        text: 'Cancelar',
        onPress: () => console.log('te arrepientes'),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: () => this.CerrarSecion()},
    ]);


  CerrarSecion() {
    firebase.auth().signOut();
    this.props.navigation.replace("Welcome");
  }

  render() {
    
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} /> 
        <AppHeader
              //title={""}
              headerBg={"#39B7FF"}
              iconColor={"Black"}
              //back
              //menu //or back  el menu 
              
              //navigation={this.props.navigation.navigate(Historial)}

             /* optionalIcon="bell" //no
              optionalBtn="bell" //si
              optionalFunc={() => console.log('optional')}  //no 
              optionalBtnPress={() => console.log('optional3')}  //si 
              optionalBadge={10}*/
        />
          <View>

            <TouchableOpacity style={styles.GuiaButton} onPress={() => this.Prueba()} > 
              <Text style={styles.GuiatextButton} > Cerrrar secion </Text> 
            </TouchableOpacity>

            

        </View>
      </View>
    );
  }
}

/* 
<TouchableOpacity style={styles.GuiaButton} onPress={() => Alert.alert("bueno aun no lo configuro jeje", "ya lo pondre")} > 
<Text style={styles.GuiatextButton} > Compartir </Text> 
</TouchableOpacity>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  
  GuiaButton: {
    marginTop:'20%',
    marginLeft:'5%',
    marginRight:'5%',
    backgroundColor:'#A6A6A6',
    borderRadius:80
  },
  GuiatextButton: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  droidSafeArea: {
    marginTop: Platform.OS=== "android"? StatusBar.currentHeight: 0
  },
  
});
