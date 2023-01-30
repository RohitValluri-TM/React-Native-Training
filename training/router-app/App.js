import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from "@react-navigation/native";
import Home from './screens/Home';
import ProjectList from  './screens/ProjectList'

import { createStackNavigator } from "@react-navigation/stack";
import TestuseFetch from './components/TestuseFetch';
import SimpleCamera from './components/SimpleCamera';


const Stack=createStackNavigator()


// <View style={styles.container}><TestuseFetch/></View>
export default function App() {
  return (
    <View style={styles.container}>
      <SimpleCamera/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*
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

    
  <Stack.Screen name="Hook" component={TestuseFetch}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
*/