import { StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalStyle}>
            <Text style={{color:'#ffffff'}}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default GoalItem;
