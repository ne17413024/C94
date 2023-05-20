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
  SafeAreaView
} from "react-native";

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
    };
  }

  render() {
    return (
        <SafeAreaView>
        <View>
        <ImageBackground
          style={{
            height: "65%",
          }}
          resizeMode="contain"
          source={require("../assets/welcome-img.png")}
        />
          <View
            style={{
              paddingHorizontal: 10 * 4,
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                color: "blue",
                textAlign: "center",
              }}
            >
              Te ayudamos a repasar cualquier tema 
            </Text>
  
            <Text
              style={{
                fontSize: 14,
                color: "black",
                textAlign: "center",
                marginTop: 10 ,
              }}
            >
              solo crea la guia, repasala y aprueba 
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10 * 2,
              paddingTop: 20 ,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
              style={{
                backgroundColor: "blue",
                paddingVertical: 10 * 1.5,
                paddingHorizontal: 10 * 2,
                width: "48%",
                borderRadius: 10,
                shadowColor: "white",
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
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("si funciona")}
              style={{
                paddingVertical: 10 * 1.5,
                paddingHorizontal: 10 * 2,
                width: "48%",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </SafeAreaView>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    
   
  },
  texto: {
    marginTop:50
  },
  boton: {
    width: '60%',
    height: '7%',
    backgroundColor: 'blue',
    alignItems: 'center',
    marginLeft: '20%',
    marginTop: '30%'
   
  },
  botonTex: {
    fontSize: '40%',
  
  }
});