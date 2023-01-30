import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import withIncrement from './withIncrement';
class  ButtonComponent extends React.Component {
  render(){
    const {count,increment}=this.props  
    return (
    <View style={styles.container}> 
      <Text>Button Component to Test HOC</Text>
      <Button
          onPress={increment} title="Press Me!"></Button>  
        <Text>Button pressed {count}</Text>   
    </View>
  );
}
}
export default  withIncrement( ButtonComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50
  },
});



/*
import React, { Component } from 'react'
import withIncrement from './withIncrement'
class ButtonComponent extends Component {
  render() {
    const {count,increment}=this.props
    return (
      <div>
    
          <button className="btn btn-primary" 
          onClick={increment}>Clicked {count} times</button>
      </div>
    )
  }
}

export default  withIncrement( ButtonComponent)
*/