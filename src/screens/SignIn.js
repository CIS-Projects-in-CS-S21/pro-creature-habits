import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
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
				<Text style={{color: 'white', fontSize: 40, marginTop: '-20%', marginBottom: '20%'}}>
					Creature Habits
				</Text>
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
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={onSubmit}
					>
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={onSigningUp}
					>
						<Text style={styles.text}>Sign Up</Text>
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

