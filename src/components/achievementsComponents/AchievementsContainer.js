import {useDispatch, useSelector} from "react-redux";
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import Achievement from "./Achievement";
import React from "react";
import {ACH_REWARD} from "../../redux/achievementsComplete";
import DropDownPicker from "react-native-dropdown-picker";
import {FILTER_CHANGE} from "../../redux/achievementFilter";
import {REWARD} from "../../redux/coinBalance";
import {ADD_TO_STAT} from "../../redux/statTracker";

const styles = StyleSheet.create({
	achievementsContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#406BE9',
		padding: 20,
		paddingBottom: 0,
	},
	dropdownContainer: {
		height: 40,
		alignSelf: 'stretch',
		marginBottom: 30,
		marginTop: 20
	}
})

const AchievementsContainer = () => {
	const ach = useSelector(state=>state.achievements);
	const dispatch = useDispatch();
	const filter = useSelector(state=>state.achievementsFilter)

	const onPress = (achievement) => {
		if(ach[achievement][filter].complete) {
			dispatch({type: ACH_REWARD, data: [achievement, filter]});
			dispatch({type: REWARD, data: ach[achievement][filter].reward});
			dispatch({type: ADD_TO_STAT, data: ['total_coins_gain', ach[achievement][filter].reward]})
		}
	}

	return (
		<View style={styles.achievementsContainer}>
			<DropDownPicker
				items={[
					{label: 'Beginner', value: 'beginner'},
					{label: 'Intermediate', value: 'intermediate'},
					{label: 'Hard', value: 'hard'}
				]}
				defaultValue={filter}
				containerStyle={styles.dropdownContainer}
				onChangeItem={item => dispatch({type: FILTER_CHANGE, data: item.value})}
			/>
			{Object.keys(ach).map((item, index) => {
				return (
					<TouchableOpacity
						activeOpacity={0.8}
						underlayColor='#000'
						onPress={() => onPress(item)}
						key={index}
						style={styles.highlightContainer}
					>
						<Achievement key={index} achievement={item}/>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default AchievementsContainer;
