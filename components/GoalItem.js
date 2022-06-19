import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalStyle}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)} 
                android_ripple={{color: '#2f0492'}}
                style={({pressed}) => pressed ? styles.pressedItem:null} //style prop will get the pressed or onPress. So if onPress is true, this will execute. This is only for ios
            >
                <Text style={{color:'#ffffff', padding: 5}}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalStyle: {
      textAlign: 'center',
      
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#580ecc',
      borderRadius: 5,
      backgroundColor: '#580ecc'
    },
    pressedItem: { //this is for IOS since android_ripple will not work
       opacity: 0.5 
    }
  });

export default GoalItem;
