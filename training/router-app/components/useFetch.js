// custom hook  : name : useFetch    (data from REST)
//https://github.com/react-native-community/hooks/tree/master/src
import {useState,useEffect} from 'react';

const useFetch = (url=' ',options=null)=>{

     const [data,setData]=useState(null)
     const [error,setError]=useState(null)
     const [loading,setLoading] = useState(false)
     // write custom hook : useCounter
     // use it as user types in TextInput
     useEffect( ()=>{
         setLoading(true)
         setTimeout(()=>{
         fetch(url,options)
                .then(res =>res.json())
                .then (data =>{
                    setData(data)
                    setError(null)
                })
                .catch(error=>{
                    setError(error)
                    setData(null)
                })
                .finally ( ()=>setLoading(false))
            },5000)
                
     },[url,options])
     return {loading,error,data}
};
export default useFetch

