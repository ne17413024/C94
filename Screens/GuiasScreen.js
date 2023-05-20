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
  StatusBar
} from "react-native";

import AppHeader from '../components/AppHeader'; //el header 

export default class GuiasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
    };
  }

  render() {
    
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} /> 
          <AppHeader
            //sus props estan en AppHeader o en Historial
            headerBg={"#39B7FF"}
            iconColor={"black"}
            right="more-vertical"
            onRightPress={() => console.log("el de guias")}
          />

        
        <View>
          <TouchableOpacity style={styles.GuiaButton} onPress={() => this.props.navigation.navigate("Inguia")} > 
            <Text style={styles.GuiatextButton} > Guias 1 </Text> 
          </TouchableOpacity>
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
  },
  droidSafeArea: {
    marginTop: Platform.OS=== "android"? StatusBar.currentHeight: 0
  },
  
});
