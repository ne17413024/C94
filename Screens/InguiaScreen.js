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
  KeyboardAvoidingView
} from "react-native";

/*import Guias from "./Guias";
import Hoy from "../screens/Hoy"*/
import firebase from '../config';

export default class InguiaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownHeight: 40,
      pendienteId: "",
      pendienteText: "",
      penStatus:"pendiente",
      penDescrip:" ",
      dateTime:"",
      uid:"gW6fhYoRV0gCKFdRl8ceK9qGUxz1"
    
    };
  }


  async addPendiente() {
    var time = new Date();
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    fecha = time.getDate()+" de "+ meses[time.getMonth()] + " del " + time.getFullYear();

      let preguntasData = {
        /*pendienteID: Math.random().toString(36).slice(2),
        pendienteText: this.state.pendienteText,
        penStatus:this.state.penStatus,
        penDescrip:this.state.penDescrip,
        dateTime:this.state.dateTime,*/

        created_on: fecha,
        hola: "funciona",
        preText: "pregunta",
        ale: true,
        horas: "no estoy seguro",
        reA: "respuestaA",
        reB: "respuestaB",
        reC: "respuestaC",
        correct: "cual"
      };
      await firebase
        //poner de que nsecitas poner texto para que avances si no no 
        .ref(
          'users/'+ this.state.uid +'/guias/' +
            Math.random()
              .toString(36)
              .slice(2) + '/' + Math.random().toString(36).slice(2) 
        )
        .set(preguntasData)
        .then(function(snapshot) {}) 
  }


  render() {
    return (
      <View style={styles.lowerContainer}>
        <Text style={styles.texto}> pantalla Inguia jeje</Text>

        <TextInput
              style={styles.preguntas} 
              onChangeText={pendienteText => this.setState({ pendienteText })}
              placeholder={"Pregunta"}   
        />
            
        <TouchableOpacity
          style={{alignItems:'center', marginTop:'15%',marginLeft:"60%"  }}
          onPress={() => this.addPendiente()}
          title="Subir"
          color="#841584"
        >
          <Text style={{fontSize:10,}} > guardar </Text>
          <Text style={{fontSize:60}} > ✅ </Text>

        </TouchableOpacity>

      </View>
        
    );
  }
}
/*<TouchableOpacity style={styles.GuiaButton} onPress={() => this.props.navigation.navigate(Inguia)} > 
            <Text style={styles.GuiatextButton} > Guias 1 </Text> 
          </TouchableOpacity>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  texto: {
    marginTop:100
  },
  preguntas:{
    marginTop:'10%',
    fontSize:35,
    backgroundColor:"#C6C6C6",
    width:'90%',
    marginLeft:'5%',
    marginRight:'5%'
  }


  /*
  GuiaButton: {
    marginTop:'2%',
    marginLeft:'5%',
    marginRight:'5%',
    backgroundColor:'#A6A6A6',
    borderRadius:80
  },
  GuiatextButton: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },*/
});
