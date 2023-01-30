
import { StyleSheet, Text, View } from 'react-native';
import FlatListDemo from './components/FlatListDemo';
import FlatListSections from './components/FlatListSelector';
import PizzaTranslator from './components/start';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native by Dr. DSR Murthy</Text>
   <FlatListSections/>
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
  heading: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color:'yellow',
    backgroundColor:'black'
  }
});
