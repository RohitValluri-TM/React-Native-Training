import React, { useState,useLayoutEffect } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Project from '../components/Project'

const renderAddListIcon= (addProject)=>{
    return (
        <TouchableOpacity onPress={()=>addProject({text:'Hello2',isChecked:false})}>
            <Text style={styles.icon}>Add</Text>
        </TouchableOpacity>
    )
}

export default  ({navigation})=>{
    const [projects,setProjects]=useState([{text:'testing',isChecked:false}])

    // add new project
    const addProject=(project)=>{
        projects.push(project)
        setProjects([...projects])//updating the state for re-rendering
    }
    const removeProject=(index)=>{
        projects.splice(index,1)
        setProjects([...projects])
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>renderAddListIcon(addProject)
        })
    })

    return <View style={styles.container}>
  <FlatList 
       data={projects} 
       renderItem={({item:{text,isChecked},index})=>{
        return <Project text={text} isChecked={isChecked}></Project>
       }}>

  </FlatList>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',    
    },
    icon:{
        padding:5,
        fontSize:32,
        color:"white",
    }
  });