import React, { Component } from "react";
import { Text, 
  View, 
  StyleSheet,
  SafeAreaView, 
  Platform, StatusBar, 
  Image, 
  Dimensions,
  TextInput, 
  Button, 
  Alert, 
  TouchableOpacity,} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppHeader from "../components/AppHeader"; //el header

import AppLoading from "expo-app-loading";
import firebase from '../config';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/* import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'; */

export default class PendientesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownHeight: 40,
      pendienteId: "",
      pendienteText: "",
      penStatus:"pendiente",
      penDescrip:" ",
      dateTime:"",
      uid:"gW6fhYoRV0gCKFdRl8ceK9qGUxz1",

      expoPushToken: '',
      setExpoPushToken:'',
      notification:'',
      setNotification:'',
      notificationListener: null,
      responseListener: null,
    
      hora:18,
      minutos:8,
      date: new Date(),
      prueba: null
    };
  }

  async useEffect() {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }
  


  async componentDidMount() {
    // Aquí puedes ejecutar cualquier código que necesites después de que el componente haya sido montado
    console.log("funciona?");
    this.setState({ notificationListener: useRef() });
    this.setState({ responseListener: useRef() });
    console.log(this.state.prueba)
  }

  
  
  async addPendiente() {
    var time = new Date();
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    fecha = time.getDate()+" de "+ meses[time.getMonth()] + " del " + time.getFullYear();

      let pendienteData = {
        pendienteID: Math.random().toString(36).slice(2),
        pendienteText: this.state.pendienteText,
        created_on: fecha,
        penStatus:this.state.penStatus,
        penDescrip:this.state.penDescrip,
        dateTime:this.state.dateTime
      };
      await firebase
        //poner de que nsecitas poner texto para que avances si no no 
        .ref(
          'users/'+ this.state.uid +'/pendientes/' +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(pendienteData)
        .then(function(snapshot) {}) 

    this.schedulePushNotification();
  }

  async schedulePushNotification() {
    const date = new Date();
    date.setHours(this.state.hora); // horas en formato de 24 horas
    date.setMinutes(this.state.minutos);
    console.log(this.state.hora + "   " + this.state.minutos);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "¡Tienes un pendiente! 📬",
        body: this.state.pendienteText,
      },
      trigger: this.state.prueba,
    });
      //obtengo a la hora que quiere que se le envie la notificacion
      var uno = this.state.prueba.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      this.setState({prueba: uno});
      console.log(this.state.prueba);
  }

  render() {    
      return(
      <View >
        <SafeAreaView style={styles.droidSafeArea} />
        
        <View style={styles.fieldsContainer}>
        <AppHeader
            //sus props estan en AppHeader o en Historial
            headerBg={"#39B7FF"}
            iconColor={"black"}
            right="more-vertical"
            onRightPress={() => console.log("aqui la ventana modal")}
          />
            
              
              <View style={{ marginHorizontal: RFValue(10) }}>
               
                
              </View>
               

              <TextInput
              style={{marginTop:'10%',fontSize:35,backgroundColor:"#C6C6C6"  }} 
              onChangeText={pendienteText => this.setState({ pendienteText })}
              placeholder={"Pendiente"}   
            />
            
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}></Text>
                <DateTimePicker
                is24Hour={true}
                value={this.state.date}
                mode={'time'}
                onChange={(event, selectedDate) => this.setState({prueba: selectedDate })}
                style={{width: '80%'}}
                />
            </View>
            
            <TouchableOpacity
              style={{alignItems:'center', marginTop:'-10%',marginLeft:"75%"  }}
              onPress={() => this.addPendiente()}
              title="Subir"
              color="#841584"
            >
              <Text style={{fontSize:60,}} > ✓ </Text>
              <Text style={{fontSize:10, marginTop: '-8%'}} > guardar </Text>

            </TouchableOpacity>
          
      </View>
      <View style = {{flex: 0.08}} />
      </View>
      )
    
  }
}


/* async function schedulePushNotification() {
  const date = new Date();
  date.setHours(18); // horas en formato de 24 horas
  date.setMinutes(1);

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "¡Tienes un pendiente! 📬",
      body: 'si llego a las 5:54?',
      data: { data: 'goes here' },
    },
    trigger: { date},
  });
} */

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("token: " + token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}


const styles = StyleSheet.create({
  
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
    submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    paddingBottom: 30,
    height:'30%',
  },
})

