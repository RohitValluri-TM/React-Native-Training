import { StyleSheet, Text, View } from 'react-native';
import ReduxApp from './basics/ReduxApp';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React  Native & Redux App</Text>
     <ReduxApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    backgroundColor:'olive',
    color:'yellow',
    fontSize:33,
  }
});
