import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {ACH_ON} from "../redux/achievementsVisible";
import {STAT_ON} from "../redux/statsVisible";
import AchievementsScreen from "./Achievements";
import StatsScreen from "./UserStats";


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
});


const SettingsScreen = () => {
	const dispatch = useDispatch()

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={[styles.button, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}
					onPress={() => dispatch({type: ACH_ON})}
				>
					<Text style={styles.text}>Achievements</Text>
					<Ionicons name="arrow-forward" color="white" size='22'/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, {borderBottomWidth: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
					onPress={() => dispatch({type: STAT_ON})}
				>
					<Text style={styles.text}>User Stats</Text>
					<Ionicons name="arrow-forward" color="white" size='22'/>
				</TouchableOpacity>
			</View>
			<AchievementsScreen />
			<StatsScreen />
		</View>

	);
};

export default SettingsScreen;
