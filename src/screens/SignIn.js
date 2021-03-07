import React from 'react';
import { View, Text, StyleSheet, Button} from "react-native";

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
});

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

export default SignInScreen;
