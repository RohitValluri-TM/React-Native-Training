import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
export default class Demo2 extends Component{
  saveUserDetails() {
    let username = "Murthy";
    AsyncStorage.setItem("username", username);
  }
  displayuserDetail = async () => {
    try {
      await AsyncStorage.removeItem("username");
      let username = await AsyncStorage.getItem("username");
      alert(username);
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <View style={syncStyles.containerStyle}>
        <TouchableOpacity onPress={this.saveUserDetails}>
          <Text>click here to set the user data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.displayuserDetail}>
          <Text>Click me to the user see the detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const syncStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
