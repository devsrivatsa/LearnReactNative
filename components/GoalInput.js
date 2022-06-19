import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';
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
        <Modal visible={props.modalVisiblity} animationType='slide'> 
        {/* //there should always be a nested view in the modal for styling */}
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image} 
                    source={require('../assets/goal.png')}
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your goals here!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalhandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor:'#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#130a0a'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,

    },
    button: {
        width: '40%',
        marginLeft: 8,
        marginRight: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput;