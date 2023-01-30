import {useEffect} from 'react'
import {BackHandler} from 'react-native'
//custom hook for back button handler in React native
export function useBackHandler(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler)

    return () => BackHandler.removeEventListener('hardwareBackPress', handler)
  }, [handler])
}