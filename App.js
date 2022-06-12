import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, FlatList } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //this is the best way to update a list in javascript
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text:enteredGoalText, key:Math.random().toString()}]);
  }


  return (
   <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
       <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        />
       <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
     </View>
     <View style={styles.goalsContainer}>
        {/* {courseGoals.map((goal) => <View key={goal} style={styles.goalStyle}><Text style={{color:'#ffffff'}}>{goal}</Text></View>)} --> this is not needed for flatlist; only ScrollView*/}
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
            <View style={styles.goalStyle}>
              <Text style={{color:'#ffffff'}}>{itemData.item.text}</Text>
            </View>
          )
        }
      }
      keyExtractor={(item, index) => item.key} 
      alwaysBounceVertical={false}
      />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalStyle: {
    textAlign: 'center',
    marginLeft: 24,
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#580ecc',
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#580ecc'
  }
});
