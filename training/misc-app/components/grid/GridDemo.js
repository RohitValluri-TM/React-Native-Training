import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Grid from "react-native-grid-component";
//npx expo install react-native-grid-component
/*
data: This is an array of data that would be rendered on the grid in form of rows and columns.
renderItem: Function takes one input at a time from data and transforms it into formatted component
 to render on User interface.
renderPlaceHolder: This is an optional component whose type is a function
 taking a number as input and perform desired logic to return react element.
keyExtractor: An item is always associated with a key, this is used to extract 
key corresponding to react component.
numColumns: This is an integer value that represents the number of 
columns required in a react grid.
Sections: This is a Boolean property which is set when we list of data
 needs to be broken down into logical units of data.
*/
const COLOR_COUNT = 10;

export default class GridDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: addColorOnGrid(COLOR_COUNT),
      refreshing: false,
    };
  }
  dorenderItem = (data) => (
    <View style={[{ backgroundColor: data }, styles.item]} />
  );
  dorenderPlaceholder = () => <View style={styles.item} />;
  render() {
    return (
      <Grid
        style={styles.list}
        renderItem={this.dorenderItem}
        renderPlaceholder={this.dorenderPlaceholder}
        data={this.state.data}
        // define number of columns on grid
        numColumns={3}
        keyExtractor={(item, n) => n.toString()}
        refreshing={this.state.refreshing}
        // do actions on refresh
        onRefresh={() => {
          this.setState({
            data: addColorOnGrid(COLOR_COUNT),
            refreshing: false,
          });
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flex: 2,
    height: 120,
    margin: 1.5,
  },
  list: {
    flex: 2,
  },
});
// Helper functions

const colors_arr = [
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];
function addColorOnGrid(length) {
  return Array.from(Array(length)).map(
    () => colors_arr[Math.floor(Math.random() * colors_arr.length)]
  );
}
