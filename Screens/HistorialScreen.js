import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  SafeAreaView,
  Button,
} from "react-native";

import firebase from 'firebase/app';
import 'firebase/database';

import AppHeader from '../components/AppHeader'; //el header 



export default class HistorialScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
      uid:"gW6fhYoRV0gCKFdRl8ceK9qGUxz1",
      correctas: "",
      incorrectas: ""
    };
  }

  componentDidMount(){
    //para las correctas 
      firebase
      .database()
      .ref('users/'+ this.state.uid +'/historial/correct/')
      .once('value')
      .then(snapshot => {
        const dato = snapshot.val();
        // Usa el dato como necesites
        this.setState({ correctas: dato });
        console.log("correctas: " + this.state.correctas);
      })
      .catch(error => {
        // Maneja el error
      });


    //para las incorrectas 
      firebase
      .database()
      .ref('users/'+ this.state.uid +'/historial/incorrect/')
      .once('value')
      .then(snapshot => {
        const dato1 = snapshot.val();
        // Usa el dato como necesites
        this.setState({ incorrectas: dato1 });
        console.log("incorrectas: " + this.state.incorrectas);
      })
      .catch(error => {
        // Maneja el error
      });

    console.log("funciona");
  }

  TamañoBuena = () =>{
    var tam = this.state.correctas;
    if(tam < 50){
      var tam1 = tam / 30
      return '80%'
    } 
    return '20%'
  }
  TamañoMala = () =>{
    var uno = 15;
    uno = 12
    if(uno == 15){
      return 12
    } 
    return '40%'
  }



  /*<TouchableOpacity style={styles.TopButton} > 
        <Text style={styles.TextButton} > header </Text> 
      </TouchableOpacity>*/
  render() {
    const buenaStyle = {
      marginTop:3,
      height: 50,
      width: this.TamañoBuena(),
      backgroundColor:'#82C8E3',
    };

    const malaStyle = {
      marginTop:3,
      height: 50,
      width: this.TamañoMala(),
      backgroundColor:'#E3242A',
    };


    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} /> 
         
      <AppHeader
              title={""}
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


      
      <Text style={styles.Preguntas}>Preguntas de la semana</Text>
      <View style={styles.graficas} > 

        <Text style={styles.TextgraficaBuena} > Buenas </Text> 
        <View style={buenaStyle}>
          <Text style={styles.numeroGrafica} >{this.state.correctas}</Text>
        </View> 
      
        <Text style={styles.TextgraficaMala} > Malas </Text> 
        <View style={malaStyle}>
          <Text style={styles.numeroGrafica} >{this.state.incorrectas}</Text>
        </View>
      </View>

    </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  TopButton: {
    height: 85,
    width: '100%',
    backgroundColor:'#38B6FF',
  },
  TextButton: {
    fontSize:55,
    fontWeight:'bold',
  },
  droidSafeArea: {
    marginTop: Platform.OS=== "android"? StatusBar.currentHeight: 0
  },
  graficas: {
    marginTop:30,
    marginLeft:13
  },
  Preguntas: {
    marginTop:25,
    fontSize:30,
    textAlign: 'center',
    fontWeight:'bold',
  },
  numeroGrafica: {
    fontSize:40,
    textAlign: 'center',
    fontWeight:'bold',
  },
  graficaBuena: {
    marginTop:3,
    height: 50,
    width: '40%',
    backgroundColor:'#82C8E3',
  },
  TextgraficaBuena: {
    fontSize:30,
    fontWeight:'bold',
  },
  graficaMala: {
    marginTop:3,
    height: 50,
    width: '60%',
    backgroundColor:'#E3242A',
  },
  TextgraficaMala: {
    marginTop:30,
    fontSize:30,
    fontWeight:'bold',
  },
});
