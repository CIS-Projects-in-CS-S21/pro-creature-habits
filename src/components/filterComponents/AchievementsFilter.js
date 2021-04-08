import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {FILTER_CHANGE} from "../../redux/achievementFilter";

const filterColor = '#2a56ba'

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		backgroundColor: filterColor,
		marginTop: '5%',
		marginBottom: '2%',
		height: '7%',
	},
	filterButton: {
		padding: 10,
		alignItems: 'center',
		flex: 1,
		borderRadius: 10,
		justifyContent: 'center'
	}
})


const AchievementsFilter = () => {
	const [marketFilter, setMarketFilter] = React.useState('beginner');
	const dispatch = useDispatch();


	const changeFilter = (category) => {
		setMarketFilter(category)
		dispatch({type: FILTER_CHANGE, data: category});
	}

	return (
		<View style={styles.filterContainer}>
			<TouchableOpacity
				onPress={() => changeFilter('beginner')}
				style={[styles.filterButton, marketFilter === 'beginner' && {backgroundColor: 'white'}]}
			>
				<Text style={{color: marketFilter === 'beginner' ? filterColor : 'white', fontSize: 18}}>
					Beginner
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('intermediate')}
				style={[styles.filterButton, marketFilter === 'intermediate' && {backgroundColor: 'white'}]}
			>
				<Text style={{color: marketFilter === 'intermediate' ? filterColor : 'white', fontSize: 18}}>
					Intermediate
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('hard')}
				style={[styles.filterButton, marketFilter === 'hard' && {backgroundColor: 'white'}]}
			>
				<Text style={{color: marketFilter === 'hard' ? filterColor : 'white', fontSize: 18}}>
					Hard
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default AchievementsFilter;
