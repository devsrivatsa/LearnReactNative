import { StyleSheet, View, FlatList, Button } from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function startAddingGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddingGoalHandler() {
    setModalIsVisible(false);
  }


  function addGoalHandler(enteredGoalText) {
    //this is the best way to update a list in javascript
    console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text:enteredGoalText, key:Math.random().toString()}]);
  }
  
  function deleteGoalHandler(id) {
    console.log(`id to be deleted: ${id}`);
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    });
  }

  return (
   <View style={styles.appContainer}>
    <Button title="Add New Goal" color='#d140df' onPress={startAddingGoalHandler}/>
     <GoalInput onAddGoal={addGoalHandler} modalVisiblity={modalIsVisible} onCancel={endAddingGoalHandler}/>
     <View style={styles.goalsContainer}>

      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text}
              id={itemData.item.key}
              onDeleteItem={deleteGoalHandler}
              modalIsVisible={modalIsVisible} 
            />
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
    backgroundColor:'#e4d0ff'
  },
  goalsContainer: {
    flex: 5
  }
});
