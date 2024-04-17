
import { StyleSheet, TextInput, Button, Text, View} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal!'></TextInput>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List og goals...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});
