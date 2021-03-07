import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const PetProfile = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Pet Profile Screen</Text>
		</View>
	);
};

export default PetProfile;
