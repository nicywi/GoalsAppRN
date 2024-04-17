
import { StyleSheet, TextInput, Button, Text, View} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {

  function goalInputHandler(){};
  function addGoalHandler(){};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder='Your course goal!' 
        onChangeText={goalInputHandler}/>
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List og goals...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'green'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
  flex: 5
  },
});
