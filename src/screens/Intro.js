import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
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
        color: 'white'
    },
    input:{
        width:"85%",
        backgroundColor: "white",
        marginBottom: 10,
        padding: 15,
        borderRadius: 5
    },
    buttonsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    button:{
        padding: 10,
        width: "25%",
        backgroundColor: '#402688',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    },
});


export default function IntroScreen({ onSignIn, navigation }){
    const dispatch = useDispatch();
    const first = useSelector(state => state.firstLogin);
    console.log(first);


    const onStart = () => {
        if(first == 1) {
            navigation.navigate('Create PIN')
        }
        else{
            navigation.navigate('Input PIN')
        }
    }


    const [newPIN, setNewPIN] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 40, marginTop: '-20%', marginBottom: '20%'}}>
                Creature Habits
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onStart}
                >
                    <Text style={styles.text}>Get started</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: RESET_BUTTON_PRESSED})}
            >
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
    )

}

