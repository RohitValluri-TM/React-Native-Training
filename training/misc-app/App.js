import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FadeAnimation from './components/animation/FadeAnimation';

import SlideAnimation from './components/animation/SlideAnimation';
import Demo1 from './components/asyncstoragedemos/Demo1';
import Demo2 from './components/asyncstoragedemos/Demo2';
import Demo3 from './components/asyncstoragedemos/Demo3';
import GridDemo from './components/grid/GridDemo';
import ButtonComponent from './components/hoc/ButtonComponent';
import TouchComponent from './components/hoc/TouchComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native by Murthy</Text>
     <ButtonComponent/>
     <TouchComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
