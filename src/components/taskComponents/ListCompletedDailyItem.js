import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const styles = StyleSheet.create({
	listItem: {
		paddingTop: '4%',
		paddingBottom: '4%',
		paddingLeft: '4%',
		margin: '3%',
		marginTop: 0,
		borderRadius: 10,
		backgroundColor: '#848484',
		flexDirection: 'row',
		alignItems: 'center'
	},
	taskText: {
		color: 'white',
		fontSize: 20,
		width: 180,
		textDecorationLine: 'line-through'
	},
	dateText: {
		color: 'white',
		fontSize: 12,
		paddingTop: 5,
		textDecorationLine: 'line-through'
	}

});


const ListCompletedDailyItem = ({task}) => {

	const listLongDays = Object.keys(task.days).filter(day => task.days[day].on);
	const listDays = listLongDays.map(day => day.substring(0,3));

	return(
		<View style={styles.listItem}>
			<MaterialCommunityIcons
				name="checkbox-marked-circle-outline"
				size={30}
				color='white'
				style={{paddingRight: '4%'}}
			/>
			<View style={{flexDirection: 'column'}}>
				<Text style={styles.taskText} color='white'>{task.task_name}</Text>
				<Text style={styles.dateText} color='white'>
					{'Due: ' + listDays.join(' ')}
				</Text>
			</View>
		</View>
	);
}

export default ListCompletedDailyItem;
