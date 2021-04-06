import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {RESET_BUTTON_PRESSED} from "../App";
import {useDispatch, useSelector} from "react-redux";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white',
		fontSize: 26
    },
    input:{
        width:"85%",
        backgroundColor: "white",
        marginBottom: 10,
        padding: 15,
        borderRadius: 5
    },
    button:{
        padding: 10,
        width: "80%",
		height: "7%",
        backgroundColor: '#402688',
        alignItems: 'center',
		justifyContent: 'center',
        margin: 10,
        borderRadius: 10
    },
});


export default function IntroScreen({ navigation }){
    const dispatch = useDispatch();
    const first = useSelector(state => state.firstLogin);


    const onStart = () => {
        if(first == 1) {
            navigation.navigate('Create PIN')
        }
        else{
            navigation.navigate('Input PIN')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 40, marginTop: '-30%', marginBottom: '30%'}}>
                Creature Habits
            </Text>
			<TouchableOpacity
				style={styles.button}
				onPress={onStart}
			>
				<Text style={styles.text}>Get started</Text>
			</TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: RESET_BUTTON_PRESSED})}
            >
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
    )

}

