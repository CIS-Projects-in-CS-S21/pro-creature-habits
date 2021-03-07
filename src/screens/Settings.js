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
	}
});


const SettingsScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Button color="#7e8ffc" title="Achievements" onPress={() => navigation.navigate('Achievements')} />
			<Button color="#7e8ffc" title="Stats" onPress={() => navigation.navigate('User Stats')} />
		</View>

	);
};

export default SettingsScreen;
