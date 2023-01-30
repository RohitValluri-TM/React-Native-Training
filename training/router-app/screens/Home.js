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
