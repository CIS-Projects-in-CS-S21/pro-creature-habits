import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {ACH_ON} from "../redux/achievementsVisible";
import {STAT_ON} from "../redux/statsVisible";
import AchievementsScreen from "./Achievements";
import StatsScreen from "./UserStats";
import DifficultyOptions from "../components/DifficultyOptions";


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
		marginRight: 10,
		marginLeft: 10,
		backgroundColor: 'white',
		borderRadius: 5.4
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#402688',
		padding: 15,
		borderBottomWidth: 1,
		borderColor: 'white'
	},
	titleText: {
		color: 'white',
		fontSize: 20,
		padding: 20,
		textAlign: 'center'
	},
	dropdownContainer: {
		width: 50
	}
});




const SettingsScreen = () => {
	const dispatch = useDispatch()

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Extra Pages</Text>
			<View style={styles.buttonsContainer}>

				<TouchableOpacity
					style={[styles.button, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}
					onPress={() => dispatch({type: ACH_ON})}
					activeOpacity={0.8}
				>
					<Text style={styles.text}>Achievements</Text>
					<Ionicons name="arrow-forward" color="white" size={22}/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, {borderBottomWidth: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
					onPress={() => dispatch({type: STAT_ON})}
					activeOpacity={0.8}
				>
					<Text style={styles.text}>User Stats</Text>
					<Ionicons name="arrow-forward" color="white" size={22}/>
				</TouchableOpacity>
			</View>
			<Text style={styles.titleText}>Difficulty</Text>
			<DifficultyOptions />
			<Text style={styles.titleText}>Extra</Text>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={[styles.button, {borderBottomWidth: 0, borderRadius: 5}]}
					activeOpacity={0.8}
				>
					<Text style={styles.text}>Sign Out</Text>
					<MaterialIcons name='logout' size={22} color='white'/>
				</TouchableOpacity>
			</View>
			<AchievementsScreen />
			<StatsScreen />
		</View>

	);
};

export default SettingsScreen;
