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
	const [newEmail, setNewEmail] = React.useState('');

	const createUser = useCallback(async (newUsername, newPassword, newEmail) => {
		const props = {
			username: newUsername,
			password: newPassword,
			email: newEmail,
			coinBalance: 100
		}

		const newUser = new UserInfo(props)
		await newUser.save()
		onCreateSubmit()
	}, [])

	const onCreateUser = () => {
		createUser(newUsername, newPassword, newEmail)
	}
	const onCreateSubmit= () => {
		navigation.navigate('Account Creation')
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
			<TextInput
				value={newEmail}
				onChangeText={newEmail => setNewEmail(newEmail)}
				placeholder={'Email'}
				//secureTextEntry={true}
				style={styles.input}
			/>

			<Button
				title="Click to Create First Pet"
				style={styles.button}
				onPress={() => navigation.navigate('Choose Pet')}
			/>
		</View>
	);
};

export default SignUpScreen;
