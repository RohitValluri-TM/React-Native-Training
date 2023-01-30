import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from './components/instagram-feed/InstagramFeed';
import BMICalculator from './components/bmi-calculator/BMICalculator';
import RockPaper from './components/casestudy/RockPaperScissors';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import FormField from './components/forms/FormField';
import RegisterForm from './components/forms/RegisterForm';
import Light from './components/Light';

import Login from './components/Login';
import WorldwideNews from './components/news/WorldwideNews';
//import MusicPlayer from './components/music-player/MusicPlayer';
import StopWatch from './components/stopwatch/StopWatch';
import TrafficLight from './components/TraficLight';
import AppProject from './components/project/AppProject';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native by Dr. DSR Murthy</Text>
       <Light/>
      <StatusBar style="auto" />
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
