import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {REMOVE_TASK_DAILY} from "../../redux/dailyTasks";
import {showMessage} from "react-native-flash-message";
import {useDispatch} from "react-redux";

const styles = StyleSheet.create({
	listItem: {
		paddingTop: '4%',
		paddingBottom: '4%',
		paddingLeft: '4%',
		margin: '3%',
		marginTop: 0,
		borderRadius: 10,
		backgroundColor: '#8599ff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	taskText: {
		color: 'white',
		fontSize: 20,
		width: 230,
		textDecorationLine: 'line-through'
	},
	dateText: {
		color: 'white',
		fontSize: 12,
		paddingTop: 5,
		textDecorationLine: 'line-through'
	}

});


const ListCompletedDailyItem = ({task, index}) => {

	const listLongDays = Object.keys(task.days).filter(day => task.days[day].on);
	const listDays = listLongDays.map(day => day.substring(0,3));
	const dispatch = useDispatch();

	const onDelete = (index) => {
		dispatch({type: REMOVE_TASK_DAILY, data: index});
		showMessage({
			message: 'task deleted',
			type: "danger",
			statusBarHeight: 52,
		});
	}

	return(
		<View style={styles.listItem}>
			<MaterialCommunityIcons
				name="checkbox-marked-circle-outline"
				size={30}
				color='white'
			/>
			<View style={{flexDirection: 'column'}}>
				<Text style={styles.taskText} color='white'>{task.task_name}</Text>
				<Text style={styles.dateText} color='white'>
					{'Due: ' + listDays.join(' ')}
				</Text>
			</View>
			<View style = {{flexDirection:'row', marginRight: '5%', alignItems: 'center'}}>
				<TouchableOpacity
					onPress={() => onDelete(index)}
				>
					<MaterialCommunityIcons
						name = "trash-can-outline"
						size = {30}
						color='white'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ListCompletedDailyItem;
