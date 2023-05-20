import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

/*
instalar
@expo/vector-icons -
react-native-responsive-fontsize -
expo-font -
expo-splash-screen -
@react-navigation/native -
@react-navigation/stack 
*/ 

// ...resto del código de inicialización de Firebase

import firebase from "firebase";

import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = { 
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fontsLoaded: false,
      userSignedIn: false,
      uid:""
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    console.log("uid usuario" + this.state.uid);
  }

  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Screens");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
    const user = firebase.auth().currentUser;
    this.setState({uid: user});
  };


  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      const { email, password } = this.state;

      return (
        <SafeAreaView>
      <View
        style={{
          padding: 10 * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "blue",
              marginVertical: 10 * 3,
            }}
          >
            Inicia secion aqui
          </Text>
          <Text
            style={{
              fontSize: 20,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Bienvenido de vuelta 
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          
        </View>





        <TextInput
        onChangeText={text => this.setState({ email: text })}
          placeholderTextColor={"#626262"}
          placeholder="Email"
          style={[
            {
              fontSize: 14,
              padding: 10 * 2,
              backgroundColor: "#f1f4ff",
              borderRadius: 10,
              marginVertical: 10,
            },
          ]}
        />

        <TextInput
        onChangeText={text => this.setState({ password: text })}
        secureTextEntry
          placeholderTextColor={"#626262"}
          placeholder="Password"
          style={[
            {
              fontSize: 14,
              padding: 10 * 2,
              backgroundColor: "#f1f4ff",
              borderRadius: 10,
              marginVertical: 10,
              
            },
          ]}
        />







        <View>
          <Text
            style={{
              fontSize: 14,
              color: "blue",
              alignSelf: "flex-end",
            }}
          >
            Olvidaste tu contraseña
          </Text>
        </View>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Screens")}
          style={{
            padding: 10 * 2,
            backgroundColor: "blue",
            marginVertical: 10 * 3,
            borderRadius: 10,
            shadowColor: "blue",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("Welcome")}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            regresar a atras luego cambialo
          </Text>
        </TouchableOpacity>
        
        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <Text
            style={{
              color: "blue",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            iniciar secion con 
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "gray",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-google"
                color={"black"}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "gray",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={"Black"}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "gray",
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={"Black"}
                size={10 * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
      );
    }
  }
}

// this.signIn(email, password)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems: "center",
    justifyContent: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
    marginBottom: RFValue(20)
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    marginBottom: RFValue(20)
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#15193c",
  },
  buttonTextNewUser: {
    fontSize: RFValue(12),
    color: "#FFFFFF",
    textDecorationLine: 'underline'
  }
});


