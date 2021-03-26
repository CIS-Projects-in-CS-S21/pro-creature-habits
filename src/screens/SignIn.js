import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";
import UserInfo from "../databases/UserInfo";
import {OFF} from "../redux/modalVisible";
import {RESET_BUTTON_PRESSED} from "../App";
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
	},
    buttonContainer:{
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 90%''
	},
	 button:{
		padding:15,
		width: "45%"
	 },
});
/*
const SignInScreen = ({ onSignIn, navigation }) => {
	return (

		<View style={styles.container}>
		{/*
			<Text style={styles.text}>Public Sign In Screen</Text>
			<Button title="Sign In" color="#7e8ffc" onPress={onSignIn} />
			<Text style={styles.text}>OR</Text>
			<Button title="Sign In with Google" color="#7e8ffc" onPress={() => navigation.navigate('Google Sign Up')} />
			<Text style={styles.text}>OR</Text>
			}
			<Button title="Regular Sign Up" color="#7e8ffc" onPress={() => navigation.navigate('Account Creation')}/>
		</View>
	);
};
		<Button
			   title={'Singup'}
			   style={styles.button}
			   onPress={this.onLogin.bind(this)}
			 />
export default SignInScreen; */

export default function SignInScreen({ onSignIn, navigation }){
	const dispatch = useDispatch();
	UserInfo.createTable()
	const checkLogin = useCallback(async (username, password) => {
		let authenticated = false
		try {
			const user = await UserInfo.findBy({username_eq: username})
			console.log(user);
			console.log(user.password);
			if (password == user.password) {
				console.log("Correct");
				authenticated = true
				onSignIn()

			} else {
				console.log("Wrong Username/Password");
			}
		}
		catch{
			console.log("User not found");
		}



	}, [])

	const onSubmit = () => {
		checkLogin(username, password);
	}
	const onSigningUp = () => {
		navigation.navigate('Sign Up')
	}


	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
		return (
		  <View style={styles.container}>
			<TextInput
			  value={username}
			  onChangeText={username => setUsername(username)}
			  placeholder={'Username'}
			  style={styles.input}
			/>
			<TextInput
			  value={password}
			  onChangeText={password => setPassword(password)}
			  placeholder={'Password'}
			  secureTextEntry={true}
			  style={styles.input}
			/>
			
		   <Button
			  title={'Login'}
			  style={styles.button}
			  onPress={onSubmit}
			/>
			  <Button
				  title={'RESET'}
				  style={styles.button}
				  onPress={() => dispatch({type: RESET_BUTTON_PRESSED})}
			  />

			  <Button
				  title={'SignUp'}
				  style={styles.button}
				  onPress={onSigningUp}
			  />

			</View>
		)
	
	}

