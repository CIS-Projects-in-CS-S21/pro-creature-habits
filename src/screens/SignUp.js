import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import UserInfo from "../databases/UserInfo";

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
	button:{
    		padding: 10,
    		width: "50%",
    		backgroundColor: '#402688',
    		alignItems: 'center',
    		margin: 10,
    		borderRadius: 5
    	},
	input:{
		width:"85%",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 15,
	},
});

const SignUpScreen = ({ onSignUp, navigation }) => {
	const [newUsername, setNewUsername] = React.useState('');
	const [newPassword, setNewPassword] = React.useState('');

	const createUser = useCallback(async (newUsername, newPassword) => {
		const props = {
			username: newUsername,
			password: newPassword,
			coinBalance: 100
		}

		const newUser = new UserInfo(props)
		await newUser.save()
		onCreateSubmit()
	}, [])

	const onCreateUser = () => {
		createUser(newUsername, newPassword)
	}
	const onCreateSubmit= () => {
		navigation.navigate('Choose Pet')
	}

	return (
		<View style={styles.container}>
			<TextInput
				value={newUsername}
				onChangeText={newUsername => setNewUsername(newUsername)}
				placeholder={'Username'}
				style={styles.input}
			/>
			<TextInput
				value={newPassword}
				onChangeText={newPassword => setNewPassword(newPassword)}
				placeholder={'Password'}
				secureTextEntry={true}
				style={styles.input}
			/>
			<TouchableOpacity
            						style={styles.button}
            						onPress={onCreateUser}
            					>
            						<Text style={styles.text}>Click to Create First Pet</Text>
            					</TouchableOpacity>
		</View>
	);
};

export default SignUpScreen;
