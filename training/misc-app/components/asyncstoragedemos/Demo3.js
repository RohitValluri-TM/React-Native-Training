//multi-get
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
export default class Demo3 extends Component {
  saveUserDetails() {
    let username = "Murthy";
    let age = "55";
    let gender= "male";

    AsyncStorage.setItem("username", username);
    AsyncStorage.setItem("age", age);
    AsyncStorage.setItem("sex", gender);
  }
  displayuserDetail = async () => {
    let username = "";
    let age = "";
    let sex = "";
    try {
      AsyncStorage.multiGet(["username", "age", "gender"]).then((response) => {
        username = response[0][1];
        age = response[1][1];
        sex = response[2][1];
        alert(
          "user age is " +
            age +
            " " +
            "and name of user is " +
            username +
            " " +
            " user is " +
            gender
        );
      });
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
