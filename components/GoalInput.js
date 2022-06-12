import { StyleSheet, TextInput, View, Button } from 'react-native';
import {useState} from 'react';




function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    //this is a trick that we can use in react when we need same function in both main and other component files
    //we redefine the function with the same name and 
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalhandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title="Add Goal"
                onPress={addGoalhandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default GoalInput;