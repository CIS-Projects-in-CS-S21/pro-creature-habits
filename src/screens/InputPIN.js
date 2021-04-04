import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import UserInfo from "../databases/UserInfo";
import {useSelector} from "react-redux";
import {showMessage} from "react-native-flash-message";
import {ItemInventory} from "../components/ItemInventory";

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
			<TextInput
				value={pinInput}
				onChangeText={pinInput => setPinInput(pinInput)}
				placeholder={'Type Your PIN Here'}
				style={styles.input}
				keyboardType="numeric"
			/>


			<Button
				title="Submit"
				style={styles.button}
				onPress={() => onSubmit()}
			/>
			<Button
				title="Forgot PIN"
				style={styles.button}
				onPress={() => onForgot()}
			/>
		</View>
	);
};

export default InputPINScreen;
