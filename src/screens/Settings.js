import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useSelector} from "react-redux";


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		backgroundColor: '#406BE9',

	},
	text: {
		color: 'white',
		fontSize: 20
	},
	buttonsContainer: {
		marginTop: 20,
		marginRight: 10,
		marginLeft: 10,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#402688',
		padding: 15,
		borderBottomWidth: 1,
		borderColor: 'white'
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#406BE9'
	},
	modalButton: {
		backgroundColor: '#402688',
		padding: 15,
		borderRadius: 10
	},
	modalHeader: {
		backgroundColor: '#406BE9',
		alignItems: 'center',
		paddingTop: 50,
	},
	modalHeaderText: {
		color: 'white',
		fontSize: 30
	}
});


const SettingsScreen = () => {
	const [isAchievementsVisible, setAchievementsVisible] = React.useState(false);
	const [isStatsVisible, setStatsVisible] = React.useState(false);

	const toggleAchievementsVisible = () => {
		setAchievementsVisible(!isAchievementsVisible);
	}

	const toggleStatsVisible = () => {
		setStatsVisible(!isStatsVisible);
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={[styles.button, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}
					onPress={toggleAchievementsVisible}
				>
					<Text style={styles.text}>Achievements</Text>
					<Ionicons name="arrow-forward" color="white" size='22'/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, {borderBottomWidth: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
					onPress={toggleStatsVisible}
				>
					<Text style={styles.text}>User Stats</Text>
					<Ionicons name="arrow-forward" color="white" size='22'/>
				</TouchableOpacity>
			</View>
			<View style={styles.modalContainer}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={isAchievementsVisible}
				>
					<View style={styles.modalHeader}>
						<Text style={styles.modalHeaderText}>Achievements</Text>
					</View>
					<View style={styles.modalContainer}>

						<TouchableOpacity
							onPress={toggleAchievementsVisible}
							style={styles.modalButton}
						>
							<Text style={styles.text}>Close</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>

			<View style={styles.modalContainer}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={isStatsVisible}
				>
					<View style={styles.modalHeader}>
						<Text style={styles.modalHeaderText}>User Stats</Text>
					</View>
					<View style={styles.modalContainer}>
						<TouchableOpacity
							onPress={toggleStatsVisible}
							style={styles.modalButton}
						>
							<Text style={styles.text}>Close</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		</View>

	);
};

export default SettingsScreen;
