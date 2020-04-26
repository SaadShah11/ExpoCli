import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputtHandler = (userText) => {
    setEnteredText(userText)
  }

  const addTextHandler = () => {
    //Adding old array to new then adding new item
    setCourseGoals(currentGoals => [...currentGoals, enteredText])
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput 
        placeholder="Enter Task" 
        style={styles.textArea}
        //Using this means run function in every key stroke
        onChangeText={textInputtHandler}
        value={enteredText}
        />
        <Button 
        title="Add" 
        style={styles.button}
        //Paranthesis not used so that it will execute only when button pressed
        onPress={addTextHandler}
        />
      </View>
      <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style={styles.listItems}><Text>{goal}</Text></View>)}
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 50
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 1,
  },
  textArea: {
    width: 120
  },
  listItems: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#709BD7',
    borderColor: 'black',
    borderWidth: 1
  }
});
