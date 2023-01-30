ntroduction to React Native AsyncStorage
AsyncStorage in the react native is one kind of storage system where we can store the global variable for accessing them into our apps, it is always better to use the AsyncStorage instead of using the LocalStorage, basically AsyncStorage is asynchronous, persistent and unencrypted key-value storage system on the app, it would be good if we use the asyncStorage with any abstraction top on it instead of using directly, in case of IOS it will be used with native code in which small value will go to serialize and large value will go to separate file, in case of android we can use sqlite or RocksDB.

Working of React Native AsyncStorage
Working of React native AsyncStorage can be defined in the below steps:

All in One Software Development Bundle
(600+ Courses, 50+ projects)

Python TutorialC SharpJavaJavaScript
C Plus PlusSoftware TestingSQLKali LinuxPrice
₹7999 ₹125000
View Courses
600+ Online Courses | 50+ projects | 3000+ Hours | Verifiable Certificates | Lifetime Access
4.6 (85,952 ratings)
It stores data on the user system(android or IOS devices).
In case of even using close the app or restarting the system still, this data is available.
Data will be lost if the user format forcefully clears the cache from system memory.
These data are used when a user once logins and close the system, at that time it keeps the data on user devices and once the user opens the app the app will fetch data from AsyncStorage and get the login details.
Methods
Given below are the different methods of React Native AsyncStorage:

1. setItem and getItem
setItem: It sets the item on the key with a value and once setting will be done it will call a callback function.
getItem: Fetch the data from the key where we set the value after fetching all the details it will call a callback function also.
In the below example first, we set the value for the storage “username” in the function saveUserDetail(this function will be called on clicking text) and in the second another function displayuserDetail(this function will get called on clicking the text).

Example:

Code:

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
View,TouchableOpacity, AsyncStorage,
} from 'react-native';
export default class syncStorageExample extends Component<Props> {
saveUserDetails(){
let username = "Ranjan";
AsyncStorage.setItem('username',username);
}
displayuserDetail = async ()=>{
try{
let username = await AsyncStorage.getItem('username');
alert(username);
}
catch(error){
alert(error)
}
}
render() {
return (
<View style={syncStyles.containerStyle}>
<TouchableOpacity onPress ={this.saveUserDetails}>
<Text>click here to set the user data</Text>
</TouchableOpacity>
<TouchableOpacity onPress ={this.displayuserDetail}>
<Text>Click me to the user see the detail</Text>
</TouchableOpacity>
</View>
);
}
}
const syncStyles = StyleSheet.create({
containerStyle: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
});
Output:

React Native AsyncStorage 1
React Native AsyncStorage 2
2. removeItem
Whatever item we set with the help of function setItem that item can be removed with the help of function removeItem. removeItem function has a call back also which gets called once the specified item will get removed from the asyncStorage. In the below example first, we set the value for the variable inside the function saveUserDetails which get called on text click, second when next (down text) will get clicked first it will remove the item and then it will try to fetch value for the removed variable and the output will be null as we have already removed that item.

Example:

Code:

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
View,TouchableOpacity, AsyncStorage,
} from 'react-native';
export default class syncStorageExample extends Component<Props> {
saveUserDetails(){
let username = "Ranjan";
AsyncStorage.setItem('username',username);
}
displayuserDetail = async ()=>{
try{
await AsyncStorage.removeItem('username');
let username = await AsyncStorage.getItem('username');
alert(username);
}
catch(error){
alert(error)
}
}
render() {
return (
<View style={syncStyles.containerStyle}>
<TouchableOpacity onPress ={this.saveUserDetails}>
<Text>click here to set the user data</Text>
</TouchableOpacity>
<TouchableOpacity onPress ={this.displayuserDetail}>
<Text>Click me to the user see the detail</Text>
</TouchableOpacity>
</View>
);
}
}
const syncStyles = StyleSheet.create({
containerStyle: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
});
Output:

removeItem
React Native AsyncStorage 4
3. multiGet
Example:

Code:

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
View,TouchableOpacity, AsyncStorage,
} from 'react-native';
export default class syncStorageExample extends Component<Props> {
saveUserDetails(){
let username = "Ranjan";
let age='31'
let sex="male"
AsyncStorage.setItem('username',username);
AsyncStorage.setItem('age',age);
AsyncStorage.setItem('sex',sex);
}
displayuserDetail = async ()=>{
let username=''
let age=''
let sex=''
try{
AsyncStorage.multiGet(["username", "age", "sex"]).then(response => {
username=response[0][1];
age=response[1][1];
sex=response[2][1];
alert("user age is "+age +" "+ "and name of user is "+ username+" "+" user is "+sex);
})
}
catch(error){
alert(error)
}
}
render() {
return (
<View style={syncStyles.containerStyle}>
<TouchableOpacity onPress ={this.saveUserDetails}>
<Text>click here to set the user data</Text>
</TouchableOpacity>
<TouchableOpacity onPress ={this.displayuserDetail}>
<Text>Click me to the user see the detail</Text>
</TouchableOpacity>
</View>
);
}
}
const syncStyles = StyleSheet.create({
containerStyle: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
});
Output:

multiGet
React Native AsyncStorage 6
4. multiRemove
Some time in case of too many storage variables removing each one by one will be a lengthy task so to avoid it we can use the method multiRemove. In the below example we have set some attributes with inside the function setUserDetails with help of syncStorage function called setItem. Once we are done with setting the item we will call the next text for fetching the item which will call the function displayUserDetail, inside this function we have removed all the attributes by mentioning their names in the format of an array. And finally, we are trying to access any attribute it will display null as we have removed all at once.

Example:

Code:

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
View,TouchableOpacity, AsyncStorage,
} from 'react-native';
export default class syncStorageExample extends Component<Props> {
saveUserDetails(){
let username = "Ranjan";
let age=31
let sex="male"
AsyncStorage.setItem('username',username);
}
displayuserDetail = async ()=>{
try{
let keys = ['username', 'age','sex'];
AsyncStorage.multiRemove(keys, (err) => {
//it will remove the key username,age and sex all at once
//here we can perform operation ehich we want to perform after removal
});
let age = await AsyncStorage.getItem('age');
alert(age);
}
catch(error){
alert(error)
}
}
render() {
return (
<View style={syncStyles.containerStyle}>
<TouchableOpacity onPress ={this.saveUserDetails}>
<Text>click here to set the user data</Text>
</TouchableOpacity>
<TouchableOpacity onPress ={this.displayuserDetail}>
<Text>Click me to the user see the detail</Text>
</TouchableOpacity>
</View>
);
}
}
const syncStyles = StyleSheet.create({
containerStyle: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
});