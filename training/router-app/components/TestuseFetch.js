import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import useFetch from './useFetch'
import { ActivityIndicator} from 'react-native'

export default  ()=>{
    const url='https://jsonplaceholder.typicode.com/users'
    //const options={JWTToken:'fsflkjsklf4545'}
    
    const {loading,error,data=[]}= useFetch(url)

     if (error)  return <View><Text>Error! </Text></View>
     if (loading) return <View><ActivityIndicator size="large" color="#0000ff" /></View> 
  
    return <View style={styles.container}>
        <View>
               <Text>Users for this project</Text>
               <Text>---------------------</Text>
        </View>
        <FlatList 
             data={data} 
             renderItem={({item:{id,email},index})=>{
                    return (
                        <View>                            
                            <Text>{id} - {email}</Text>
                        </View>
                    )
            }}>

            </FlatList>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',    
    },

  });

/*
  const TestuseFetch = (props) =>{
    const url='https://jsonplaceholder.typicode.com/users'
    
    const {loading,error,data=[]}= useFetch(url)
     if (error)  return <p >Error! </p>
     if (loading) return <p>Loading............ </p>

     return (
         <div>
             <h1 className="bg-info">
                 Data from REST API using custom hook</h1>
             <ul>
                 {
                     data?.map( item=>(
                         <li key={item.id}>{item.name}</li>
                     ))
                 }
             </ul>
         </div>
     )
}
export default TestuseFetch
*/