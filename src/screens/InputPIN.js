import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {showMessage} from "react-native-flash-message";
import {ItemInventory} from "../components/ItemInventory";
import {RESET_BUTTON_PRESSED} from "../AppUnwrapped";

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
	button:{
		padding: 10,
		width: "40%",
		backgroundColor: '#402688',
		alignItems: 'center',
		margin: 10,
		borderRadius: 10
	},
});

const InputPINScreen = ({ onSignUp, navigation }) => {
	const [pinInput, setPinInput] = React.useState('');
	const realPIN = useSelector(state => state.pin);
	const hint = useSelector(state => state.pintHint);
	console.log(realPIN);
	const onSubmit= () => {
		if(pinInput == realPIN) {
			onSignUp()
		}
		else{
			showMessage({
				message: "Incorrect PIN",
				type: "success",
				statusBarHeight: 52,
			})
		}
	}

	const onForgot= () =>{
		showMessage({
			message: hint,
			type: "success",
			statusBarHeight: 52,
		})
	}

	return (
		<View style={styles.container}>
			<Text style={{color: 'white', fontSize: 40, paddingBottom: '10%', marginTop: '-20%'}}>Input PIN</Text>
			<TextInput
				value={pinInput}
				onChangeText={pinInput => setPinInput(pinInput)}
				placeholder={'Type Your PIN Here'}
				style={styles.input}
				keyboardType="numeric"
			/>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onSubmit()}
				>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onForgot()}
				>
					<Text style={styles.text}>Forgot Pin</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default InputPINScreen;
