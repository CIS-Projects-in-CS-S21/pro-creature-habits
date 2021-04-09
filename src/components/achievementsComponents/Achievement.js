import {useSelector} from "react-redux";
import {Image, Text, View, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
	mainAchievementContainer: {
		backgroundColor: '#402688',
		padding: 10,
		paddingBottom: 15,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderRightColor: 'black',
		borderRightWidth: 1,
		flexGrow: 1
	},
	achievementContainer: {
		flexDirection: 'row',
		borderRadius: 10,
		justifyContent: 'space-between',
		borderColor: 'black',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11,
		marginBottom: 15,
	},
	achievementReward: {
		flexDirection: 'row',
		width: 20,
		justifyContent: 'center',
		backgroundColor: '#3156c4',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		flexBasis: '20%',
		alignItems: 'center'
	},
	achievementText: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 10
	},
	textProgress: {
		color: 'white',
		fontSize: 16,
		paddingRight: 10
	},
	achievementHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5
	},
	achievementRewardText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20
	}
})

const Achievement = ({achievement}) => {
	const ach = useSelector(state=>state.achievements);
	const filter = useSelector(state=>state.achievementsFilter);

	return (
		(ach[achievement][filter].complete && ach[achievement][filter].reward_taken ? (
			<View style={styles.achievementContainer}>
				<View style={[styles.mainAchievementContainer, {backgroundColor: '#636363', borderRightColor: 'black'}]}>
					<View style={styles.achievementHeader}>
						<Text style={styles.achievementText}>{ach[achievement].name}</Text>
						<Text style={styles.textProgress}>{`${ach[achievement][filter].to_complete}/${ach[achievement][filter].to_complete}`}</Text>
					</View>
					<Progress.Bar style={{margin: 10}} progress={1} width={null} height={10} color='white' borderColor='white' />
				</View>
				<View style={[styles.achievementReward, {backgroundColor: '#868686'}]}>
					<Ionicons name="checkmark" color="white" size={22}/>
				</View>
			</View>
		) : ach[achievement][filter].complete ? (
			<View style={styles.achievementContainer}>
				<View style={[styles.mainAchievementContainer, {backgroundColor: '#4a992c', borderRightColor: 'white'}]}>
					<View style={styles.achievementHeader}>
						<Text style={styles.achievementText}>{ach[achievement].name}</Text>
						<Text style={styles.textProgress}>{`${ach[achievement][filter].to_complete}/${ach[achievement][filter].to_complete}`}</Text>
					</View>
					<Progress.Bar style={{margin: 10}} progress={1} width={null} height={10} color='white' borderColor='white' />
				</View>
				<View style={[styles.achievementReward, {backgroundColor: '#4ab125'}]}>
					<Text style={styles.achievementRewardText}>{ach[achievement][filter].reward}</Text>
					<Image style={{width: 20, height: 20}} source={require('../../test_images/coin.png')}/>
				</View>
			</View>
		) : (
			<View style={styles.achievementContainer}>
				<View style={styles.mainAchievementContainer}>
					<View style={styles.achievementHeader}>
						<Text style={styles.achievementText}>{ach[achievement].name}</Text>
						<Text style={styles.textProgress}>{`${ach[achievement].completed}/${ach[achievement][filter].to_complete}`}</Text>
					</View>
					<Progress.Bar style={{margin: 10}} progress={ach[achievement].completed/ach[achievement][filter].to_complete} width={null} height={10} color='#4ab125' borderColor='white' />
				</View>
				<View style={styles.achievementReward}>
					<Text style={styles.achievementRewardText}>{ach[achievement][filter].reward}</Text>
					<Image style={{width: 20, height: 20}} source={require('../../test_images/coin.png')}/>
				</View>
			</View>
		))
	)
}

export default Achievement;
