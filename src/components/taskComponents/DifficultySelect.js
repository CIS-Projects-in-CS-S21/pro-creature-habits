import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {EASY_DIFFICULTY, HARD_DIFFICULTY, MEDIUM_DIFFICULTY} from "../../redux/difficultyCheckedReducer";



const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20
    },
    buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
    },
    button: {
        backgroundColor: '#402688',
        padding: 15
    }
})

const DifficultySelect = () => {
    const dispatch = useDispatch()
    const diff = useSelector(state=>state.difficultyCheck);

    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                style={[styles.button, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}, diff === 'easy' && {backgroundColor: 'white'}]}
                onPress={() => dispatch({type: EASY_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={[styles.text, diff === 'easy' && {color: '#402688'}]}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, diff === 'medium' && {backgroundColor: 'white', color: '#402688'}]}
                onPress={() => dispatch({type: MEDIUM_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={[styles.text, , diff === 'medium' && {color: '#402688'}]}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {borderBottomWidth: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5}, diff === 'hard' && {backgroundColor: 'white'}]}
                onPress={() => dispatch({type: HARD_DIFFICULTY})}
                activeOpacity={0.8}
            >
                <Text style={[styles.text, , diff === 'hard' && {color: '#402688'}]}>Hard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DifficultySelect;
