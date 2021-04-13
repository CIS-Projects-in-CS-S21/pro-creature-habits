import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {EASY_DIFFICULTY, HARD_DIFFICULTY, MEDIUM_DIFFICULTY} from "../../redux/difficultyCheckedReducer";



const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20
    },
    buttonsContainer: {
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5.4,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 11,
        width: 290,
        marginTop: 10,
        marginBottom: 15
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#402688',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'white'
    }
})

const DifficultySelect = () => {
    const dispatch = useDispatch()
    const diff = useSelector(state=>state.difficultyCheck);

    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                style={[styles.button, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}
                onPress={() => dispatch({type: EASY_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={styles.text}>Easy</Text>
                {diff === 'easy' &&
                <Ionicons name="checkmark" color="white" size={22}/>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: MEDIUM_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={styles.text}>Medium</Text>
                {diff === 'medium' &&
                <Ionicons name="checkmark" color="white" size={22}/>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {borderBottomWidth: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
                onPress={() => dispatch({type: HARD_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={styles.text}>Hard</Text>
                {diff === 'hard' &&
                <Ionicons name="checkmark" color="white" size={22}/>
                }
            </TouchableOpacity>
        </View>
    )
}

export default DifficultySelect;
