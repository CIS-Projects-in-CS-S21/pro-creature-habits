import React from 'react';
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
			<Text style={styles.text}>Public Sign In Screen</Text>
			<Button title="Sign In" color="#7e8ffc" onPress={onSignIn} />
			<Text style={styles.text}>OR</Text>
			<Button title="Sign In with Google" color="#7e8ffc" onPress={() => navigation.navigate('Google Sign Up')} />
			<Text style={styles.text}>OR</Text>
			<Button title="Regular Sign Up" color="#7e8ffc" onPress={() => navigation.navigate('Account Creation')}/>
		</View>
	);
};

export default SignInScreen; */

const SignInScreen = ({ onSignIn, navigation }) => {

	const checkLogin = useCallback(async (username, password) => {
		const t = await Task.findBy({ username_eq: username })


	}, [])

	const createUser = useCallback(async (text) => {
		const props = {
			username: "username",
			password: "password",
			email: "email",
			coinbalance: 100
		}

		const task = new Task(props)
		await task.save()
		setTasks(await Task.query())
	}, [])

	const onSubmit = () => {
		checkLogin(username, password);
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
			   title={'Singup'}
			   style={styles.button}
			   onPress={this.onLogin.bind(this)}
			 />
				
			</View>
		)
	
	}

