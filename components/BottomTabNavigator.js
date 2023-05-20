import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';

/* INSTALAR
@react-navigation/bottom-tabs -
react-native-vector-icons/Ionicons -
@react-navigation/native
@react-navigation/stack
*/



/*
import { createNavigationContainerRef } from "@react-navigation/native"
*/

// Screens
import HoyScreen from '../Screens/HoyScreen';
import PendientesScreen from '../Screens/PendientesScreen';
import HistorialScreens from '../Screens/HistorialScreen';
import GuiasScreen from '../Screens/GuiasScreen';
  import InguiaScreen from '../Screens/InguiaScreen';
import PerfilScreen from '../Screens/PerfilScreen';

//Screen names
const HoyName = "Hoy";
const HistorialName = "Historial";
const PendientesName = "Pendientes";
const GuiasName = "Guias";

const Stack = createStackNavigator();
  //headerShown
function MyStack() {
  return (
      <Stack.Navigator initialRouteName="GuiasScreen">
        <Stack.Screen name="GuiasScreen" component={GuiasScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Inguia" component={InguiaScreen} options={{ headerBackTitleVisible: false, headerShown:true }} />
      </Stack.Navigator>
    
  );
}

const getTabBarVisibility = (route) =>{
  console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  routeName.toString();
  console.log(routeName);
  if(routeName === "Inguia"){
    return true
  } 
  return false
}


const Tab = createBottomTabNavigator();
function BottonTabNavigator() {
  return (
      <Tab.Navigator
        initialRouteName={HoyScreen}
        screenOptions={({ route,}) => ({
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { height: 95, backgroundColor:'white', borderRadius:15},

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HoyName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === HistorialName) {
              iconName = focused ? 'newspaper-outline' : 'newspaper-outline';

            } else if (rn === GuiasName) {
              iconName = focused ? 'book-outline' : 'book-outline';

            } else if (rn === PendientesName) {
              iconName = focused ? 'document-text-outline' : 'document-text-outline';
              
            }else if (rn === "Perfil") {
              iconName = focused ? 'person-outline' : 'person-outline';
              
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        >
        
        <Tab.Screen name={HoyName} component={HoyScreen} options={{tabBarBadge: 30, headerShown: false}} />
        <Tab.Screen name={GuiasName} component={MyStack} options={({route}) => ({ tabBarStyle: { display:getTabBarVisibility(route)}, headerShown: false,})}/>
        <Tab.Screen name={PendientesName} component={PendientesScreen} options={{tabBarBadge: 30, headerShown: false}} />
        <Tab.Screen name={HistorialName} component={HistorialScreens} options={{headerShown: false}}  />
        <Tab.Screen name={"Perfil"} component={PerfilScreen} options={{headerShown: false, }}  />
      </Tab.Navigator>

  );
}

/*
<Tab.Screen name={GuiasName} component={MyStack} options={({route}) => ({ tabBarVisible:getTabBarVisibility(route), headerShown: false })}/>
<Tab.Screen name={PendientesName} component={Pendientes} options={{tabBarBadge: 30, headerShown: false}} />
<Tab.Screen name={HistorialName} component={Historial} options={{headerShown: false}}  />
<Tab.Screen name={"Perfil"} component={Perfil} options={{headerShown: false}}  />
*/

export default BottonTabNavigator;
