import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import UserInfo from "../databases/UserInfo";
import {useSelector} from "react-redux";

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
	console.log(realPIN);
	const onSubmit= () => {
		if(pinInput == realPIN) {
			onSignUp()
		}
		else{
			console.log(pinInput);
			console.log(realPIN);
			console.log("failed pin");
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				value={pinInput}
				onChangeText={pinInput => setPinInput(pinInput)}
				placeholder={'Type Your PIN Here'}
				style={styles.input}
			/>


			<Button
				title="Submit"
				style={styles.button}
				onPress={() => onSubmit()}
			/>
		</View>
	);
};

export default InputPINScreen;
