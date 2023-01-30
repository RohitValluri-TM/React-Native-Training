
setup:
-----
https://reactnative.dev/docs/environment-setup 

Install Node js 16.x version:

https://nodejs.org/en/blog/release/v16.16.0/ 


Install Node js  from nodejs.org web site : version 16.x only
$ node --version
$ npm --version
$ npm install -g expo-cli
$ expo --version

To create a new app:
$ expo init router-app
   select blank template

$ cd router-app
$ expo start 
run on android device by pressing 'a'

Install web dependencies for web module creation. expo install will install correct depdency version.

$ npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2

$ npm run web  or   expo start --web


   see the output in the browser. RC and click inspect in google chrome browser.  select mobile from the device toolbar.
   
   From the dimenions:responsive choose your device type.

To see the output in android emulator, install android studio and from device manager , add virtual device (nexus60) and start the emulator.
$expo start
 and press 'a' for android in metro bundler dashboard to see the output.
 'r' for reload
 'w' for web

Install 'Expo go' app from playstore in mobile device and scan the QR code to see the output.
Any changes to app will be automatically reflected in web and android.
====================================================

project:

For Navigation, install peer dependencies:

$ npx expo install @react-navigation/native @react-navigation/stack 
$ npx expo install react-native-gesture-handler 
$ npx expo install react-native-reanimated 
$ npx expo install react-native-screens
$ npx expo install @react-native-community/masked-view
$ npx expo install react-native-safe-area-context

===============================================
Level 1:
Add screens folder and add Home.js  and write component.
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default ()=>{
    return  (
        <View style={styles.container}>
            <Text>React Native Fullstack  project by Dr. Murthy</Text>
        </View>
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

Refer the component in app.js:
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack=createStackNavigator()

import Home from './screens/Home'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
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
Run now . Working......
----------------------------------------------
Enhance it :
edit Home.js:

import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'

const ListButton=(props)=>{
    return (
        <TouchableOpacity onPress={()=>{}} style={styles.itemContainer}>
            <View>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="options" size={24} color="green"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="trash" size={24} color="red"/>
                </TouchableOpacity>
            </View>
       </TouchableOpacity>
    )
}
export default ()=>{
    return  (
        <View style={styles.container}>
            <ListButton title="Bank - Design Phase"/>
            <ListButton title="Mutual Fund  -   Analysis Phase"/>
            <ListButton title="Food App - Testing Phase"/>

        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor:Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
 ---------------------------------------------- 

edit Home.js
import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'

const ListButton=(props)=>{
    return (
        <TouchableOpacity onPress={()=>{}} style={styles.itemContainer}>
            <View>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="options" size={24} color="green"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="trash" size={24} color="red"/>
                </TouchableOpacity>
            </View>
       </TouchableOpacity>
    )
}
export default ()=>{
    return  (
        <View style={styles.container}>
            <ListButton title="Bank - Design Phase"/>
            <ListButton title="Mutual Fund  -   Analysis Phase"/>
            <ListButton title="Food App - Testing Phase"/>
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor:Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
  ----------------
  Now use FlatList for dynamic data:
  
in Home.js edit like this and run:

import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'

const ListButton=({title,color})=>{
    return (
        <TouchableOpacity onPress={()=>{}} style={[styles.itemContainer,{backgroundColor:color}]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="options" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="trash" size={24} color="white"/>
                </TouchableOpacity>
            </View>
       </TouchableOpacity>
    )
}
const projects=[{title:"Bank - Design Phase",color:Colors.green},
   {title:"Mutual Fund  -   Analysis Phase",color:Colors.blue},
   {title:"Food App - Testing Phase",color:Colors.purple}
]
export default ()=>{
    return  (
        <View style={styles.container}>
            <FlatList data={projects} renderItem={({item:{title,color},index})=>{
                    return (
                        <ListButton title={title} color={color}/>
                    )
            }}>

            </FlatList>
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
       
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
  
======================================
now to navigate to ProjectList component: add ProjectList.js file to screen and write code:

add ProjectList.js to screens and write code.

home.js

import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'
//navigate('name,route params (title,color))
const ListButton=({title,color,navigation})=>{
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("ProjectList",{title,color})}}
           style={[styles.itemContainer,{backgroundColor:color}]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="options" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="trash" size={24} color="white"/>
                </TouchableOpacity>
            </View>
       </TouchableOpacity>
    )
}
const projects=[{title:"Bank - Design Phase",color:Colors.green},
   {title:"Mutual Fund  -   Analysis Phase",color:Colors.blue},
   {title:"Food App - Testing Phase",color:Colors.purple}
]
//automatically navigation prop is injected in stack navigation
export default ({navigation})=>{
    return  (
        <View style={styles.container}>
            <FlatList data={projects} renderItem={({item:{title,color},index})=>{
                    return (
                        <ListButton title={title} color={color} navigation={navigation}/>
                    )
            }}>

            </FlatList>
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
       
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
---------------------------
Edit app.js
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
================================
Now we add new project and remove existing project.
Home.js
import React,{useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/Colors'


const ListButton=({title,color,navigation,onDelete})=>{
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("ProjectList",{title,color})}}
           style={[styles.itemContainer,{backgroundColor:color}]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="options" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                     <Ionicons name="trash" size={24} color="white"/>
                </TouchableOpacity>
            </View>
       </TouchableOpacity>
    )
}
//addproject component
const renderAddListIcon= (addProject)=>{
    return (
        <TouchableOpacity onPress={()=>addProject({title:'Title',color:Colors.olive})}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}

/*
//api call
const getProjects=(props)=>{
    fetch('https://techmojo.com/api/projects/getProjects')
    .then ((projects)=> setProjects(projects))
    .catch((error)=>console.log('errror'))
}
*/
const projectsList=[
    {title:"Bank - Design Phase",color:Colors.green},
   {title:"Mutual Fund  -   Analysis Phase",color:Colors.blue},
   {title:"Food App - Testing Phase",color:Colors.purple}
]

export default ({navigation})=>{
    const [projects,setProjects]=useState(projectsList)
    // add new project
    const addProject=(project)=>{
        //axios.post(url,project)
      //  projects.push(project)
        setProjects([...projects,project])//updating the state for re-rendering
    }

    const removeProject = (index) => {
        const projectsCopy = [...projects];
        projectsCopy.splice(index, 1);
        setProjects(projectsCopy);
      };
      
    //when Shadow tree is mounted, dynamicall add  renderAddListIcon and
    //pass the handler for callback with navigatoin.setOptions for dynamic params
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>renderAddListIcon(addProject)
        })
    })
    

    return  (
        <View style={styles.container}>
            
            <FlatList data={projects} renderItem={({item:{title,color},index})=>{
                    return (
                        <ListButton
                         title={title} 
                         color={color} 
                         navigation={navigation}
                         onDelete={()=>removeProject(index)}/>
                    )
            }}>

            </FlatList>
            
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor:Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

============================
Level 3: add components folder do work.
-------------------------------------
https://firebase.google.com/
click getting started.
signup
click new project -> projectsapp
select cloud firestore
create firestore 
select "start in test mode"
click start collections - name it "users"   , cancel








