import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import UserInfo from "../databases/UserInfo";
import {OFF} from "../redux/modalVisible";
import {RESET_BUTTON_PRESSED} from "../App";
import {FIRST} from "../redux/firstLogin";
import {CREATE_PIN} from "../redux/createPIN";
import {CREATE_HINT} from "../redux/hint";
import {useDispatch} from "react-redux";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#406BE9',
	},
	text: {
		color: 'white',
		fontSize: 20
	},
	input:{
		width:"85%",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 15,
		borderRadius: 10
	},
    buttonsContainer:{
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10
	},
	button:{
		padding: 10,
		width: "40%",
		backgroundColor: '#402688',
		alignItems: 'center',
		margin: 10,
		borderRadius: 10
	},
});


export default function CreatePINScreen({ navigation }){
	const dispatch = useDispatch();



	const onCreatePIN = () => {
		console.log(newPIN);
		dispatch({type: FIRST});
		dispatch({type: CREATE_PIN, data: newPIN})
		dispatch({type: CREATE_HINT, data: newHint})
		navigation.navigate('Choose Pet')
	}


	const [newPIN, setNewPIN] = React.useState('');
	const [newHint, setNewHint] = React.useState('');
		return (
		  	<View style={styles.container}>
				<Text style={{color: 'white', fontSize: 40, marginTop: '-30%', marginBottom: '10%'}}>
					PIN creation
				</Text>
				<TextInput
					value={newPIN}
					onChangeText={newPIN => setNewPIN(newPIN)}
					placeholder={'Create PIN'}
					style={styles.input}
					keyboardType="numeric"
				/>
				<TextInput
					value={newHint}
					onChangeText={newHint => setNewHint(newHint)}
					placeholder={'Create Hint'}
					style={styles.input}
				/>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={onCreatePIN}
					>
						<Text style={styles.text}>Confirm</Text>
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

