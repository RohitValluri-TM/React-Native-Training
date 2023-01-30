import { StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';



export default function App() {
  return (
    <View style={styles.container}>
      <Text >React Native App by Murthy</Text>    
   
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
