import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>Hello from new App</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <Separator />
      <Button title="Tap me!" color="#f194ff" />
    
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
    backgroundColor: 'red',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
