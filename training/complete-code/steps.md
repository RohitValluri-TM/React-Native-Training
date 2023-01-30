install node js 16.x above
$ npm install -g expo-cli
$ expo init rn-app
$ npm start


Install expo app in your mobile phone.
Run the app , scan the code.
see the output.
Just make changes and save the code to refresh output in mobile phone.

To see the output in android emulator:
- Install android studio
- install nexus6p emulator
select device manager icon and run nexus6p emulator

$ expo start
press 'a'  for run on android emulator
select 'projectname' from emulator
press 'r' to reload app
press 'a' to open the app in emulator
//adb error you can igone and press 'a' again to fix it.


to run on web : 
$ npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2
==========================================================

----------------------------------------
Note:

Some dependencies are incompatible with the installed expo version:
  react-native-reanimated@2.13.0 - expected version: ~2.12.0
Your project may not work correctly until you install the correct versions of the packages.

Install individual packages by running npx expo install react-native-reanimated@~2.12.0
---------------------------------------

Project structure:
Package.json: contains all the dependencies of libraries and script 

app.json. This includes a set of configurations for our app with  app name, version, icon, splash screen.

App.js is the entry point of our app.

App entry component contains components like View, Text and others imported from react-native.

React Native provides a set of components that will be later transformed into native components in iOS or Android.

we create stylesheets to add styling to our components using StyleSheet.

Screens and Navigation:
To add different screens and manage navigation between them,use React Navigation.
React Navigation allows us to move between screens backward and forwards, add buttons to the header, and more.

To install React Navigation, run the following commands:

npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
=========================================

to see the appdata folder , type %appdata% in file explorer
and visit your folders.
C:\Users\Murthy\AppData\Local\Android\Sdk\emulator

C:\Users\Murthy\.android\avd\Pixel_3a_API_33_x86_64.avd

emulator -avd C:\Users\Murthy\.android\avd\Pixel_3a_API_33_x86_64.avd


//npx react-native init r-app --version 0.68.2

Type %appdata% in file explorer to see dirs.

C:\Users\Murthy\AppData\Local\Android\Sdk\emulator>emulator -list-avds
API_33
Pixel_3a_API_33_x86_64

C:\Users\Murthy\AppData\Local\Android\Sdk\emulator>

C:\Users\Murthy\AppData\Local\Android\Sdk\emulator>emulator -avd API_33

//error fix
you have to make change in this file {project_root}\node_modules\metro-config\src\defaults\blacklist.js

there is an invalid regular expression that needed changed. I changed the first expression under sharedBlacklist from:

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

to

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];