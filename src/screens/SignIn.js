import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from "react-native";

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

export default class Userlogin extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
		  username: '',
		  password: '',
		  loading:false
		};
	  }
	  
	  onLogin() {
		const { username, password } = this.state;
	
	  }
	
	  render() {
		return (
		  <View style={styles.container}>
			<TextInput
			  value={this.state.username}
			  onChangeText={(username) => this.setState({ username })}
			  placeholder={'Username'}
			  style={styles.input}
			/>
			<TextInput
			  value={this.state.password}
			  onChangeText={(password) => this.setState({ password })}
			  placeholder={'Password'}
			  secureTextEntry={true}
			  style={styles.input}
			/>
			
		   <Button
			  title={'Login'}
			  style={styles.button}
			  onPress={this.onLogin.bind(this)}
			/>
			<Button
			   title={'Singup'}
			   style={styles.button}
			   onPress={this.onLogin.bind(this)}
			 />
				
			</View>
		);
	  }
	
	}

