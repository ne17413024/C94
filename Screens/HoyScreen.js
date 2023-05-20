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

export default class HoyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
    };
  }

  render() {
    return (
      <View style={styles.lowerContainer}>
        <Text style={styles.texto}> pantalla hoy jeje </Text>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  texto: {
    marginTop:50
  }
});
