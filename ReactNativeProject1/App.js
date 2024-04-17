import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={{margin: 20, borderColor: 'pink', 
      borderWidth: 6, padding: 20, backgroundColor: 'yellow'}}>
        Hello from new App</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <Separator />
      <Button title="Tap here!" style={styles.button} />
      <TouchableOpacity onPress={() => console.log('Tapped!')} style={styles.button}>
          <Text style={styles.buttonText}>Tap here!</Text>
        </TouchableOpacity>
    
    </View>
     <Separator />
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'greenyellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'mediumslateblue', 
    fontSize: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});
