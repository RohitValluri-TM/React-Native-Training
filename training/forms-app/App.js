
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './components/forms/RegisterForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Forms with Validation by Murthy</Text>
     <RegisterForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'olive',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
