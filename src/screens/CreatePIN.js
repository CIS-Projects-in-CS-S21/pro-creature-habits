import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import UserInfo from "../databases/UserInfo";
import {OFF} from "../redux/modalVisible";
import {RESET_BUTTON_PRESSED} from "../App";
import {FIRST} from "../redux/firstLogin";
import {CREATE_PIN} from "../redux/createPIN";
import {useDispatch} from "react-redux";
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


export default function CreatePINScreen({ onSignIn, navigation }){
	const dispatch = useDispatch();



	const onCreatePIN = () => {
		dispatch({type: FIRST});
		dispatch({type: CREATE_PIN, data: newPIN})
		navigation.navigate('Choose Pet')
	}


	const [newPIN, setNewPIN] = React.useState('');
		return (
		  	<View style={styles.container}>
				<Text style={{color: 'white', fontSize: 40, marginTop: '-20%', marginBottom: '20%'}}>
					Creature Habits
				</Text>
				<TextInput
					value={newPIN}
					onChangeText={newPIN => setNewPIN(newPIN)}
					placeholder={'Create PIN'}
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

