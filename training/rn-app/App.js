import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonApp from './components/start/buttonapp';
import FlatListDemo from './components/start/flatlistdemo';
import FlatListSections from './components/start/flatlistsections';
import Scroller from './components/start/scroller';
import PizzaTranslator from './components/start/start';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native Training by Dr. DSR Murthy</Text>
    <ButtonApp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
