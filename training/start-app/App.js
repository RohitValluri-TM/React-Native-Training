//import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack=createStackNavigator()

import Home from './screens/Home'
import ProjectList  from './screens/ProjectList';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="ProjectList" 
            component={ProjectList}
            options={({route})=>{
              return ({title:route.params.title, 
               headerStyle:{backgroundColor:route.params.color},
               headerTintColor:"white"
              })
            }}></Stack.Screen>
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
/*
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import RootStack from "./src/router";

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
*/