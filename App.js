import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screen/Home";
import ReviewDetails from "./Screen/reviewDetails";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from "./shared/Header";
import React from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
         screenOptions={{ headerStyle: {
          backgroundColor: '#eee',
          
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
        },}}
      >
        <Stack.Screen name="Home" component={Home} options={ {headerTitle: ()=> <Header/>,}}/>   
        <Stack.Screen name="Review" component={ReviewDetails} options={({route})=>({title:route.params.title})} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
