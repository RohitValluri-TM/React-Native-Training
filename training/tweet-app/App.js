import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './source'; // index.js
import 'react-native-gesture-handler';
class App extends Component {

  render() {
    return (
      
      <View style={styles.container}>
         <AppRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;




/*

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './containers/Home'
//import TweetEditor from './containers/TweetEditor'
import TweetEditorHooks from './containers/TweetEditorHooks'

const AppNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  tweetEditor: {
    screen: TweetEditorHooks,
    navigationOptions: {
      headerTitle: 'New Tweet'
    }
  }
}
)

export default createAppContainer(AppNavigator)
*/

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
*/