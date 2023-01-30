import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import withIncrement from './withIncrement';
class  TouchComponent extends React.Component {
  render(){
    const {count,increment}=this.props
  
    return (
    <View style={styles.container}>
      <Text>Touch Button  Component to test HOC</Text>
      <Button
          onPress={increment} title="Touch Me "></Button>  
 
      <Text  onPress={increment}>You touched me {count} times</Text>
    </View>
  );
}
}
export default  withIncrement( TouchComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






/*
import React, { Component } from 'react'
import withIncrement from './withIncrement'
class HoverComponent extends Component {
  render() {
    const {count,increment}=this.props
    return (
      <div>
    
          <h2 onMouseOver={increment}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default  withIncrement( HoverComponent)
*/
