https://reactnavigation.org/docs/getting-started/

c:\>expo init tweets-app
select the blank project.

npx expo install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

This will install versions of these libraries that are compatible.
npx expo install react-navigation

npx expo install @react-navigation/native-stack
npx expo install expo-image-picker
npx expo install react-native-gesture-handler

https://reactnavigation.org/docs/hello-react-navigation

in app.json , add "plugins": ["expo-image-picker"],

Creating a native stack navigator​
createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. 

The Navigator should contain Screen elements as its children to define the configuration for routes.

NavigationContainer is a component which manages our navigation tree and contains the navigation state. 

This component must wrap all navigators structure. 



CLM :                                                                       
 1. constructor - 
 2. render
 3. componentDidMount   -   useEffect
 4. getDerivedStateFromProps   - useEffect
 5. componentDidCatch   - try  catch
 6. shouldComponentUpdate
 7. compenentWillUnmount()  - clearning 



SFC: CLM
export default =()=>{
    const name="murthy"
}
useEffect( ()=>{

},[props.url])
if (flag)
return(
    <div>hi</div>
)