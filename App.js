import { StyleSheet, Text, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello form dummy text</Text>
      <Text style={styles.dummyText}>New app</Text>
      <Button title = 'Tap me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
    borderWidth: 5, 
    borderColor: 'blue', 
    padding: 16,
  }
  
});
