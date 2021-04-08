import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {DAILY_EDIT_ON} from "../../redux/editDailyTaskModal";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import {SET_DAYS} from "../../redux/daysChecked";
import {SET_INDEX} from "../../redux/taskEditIndex";
import {REMOVE_TASK_DAILY} from "../../redux/dailyTasks";
import {showMessage} from "react-native-flash-message";
import {useDispatch, useSelector} from "react-redux";

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
		width: 195,
	},
	dateText: {
		color: 'white',
		fontSize: 12,
		paddingTop: 5,
	}

});


const ListNotDueDailyItem = ({task, index}) => {
	const iconSize = 30;
	const dailyTask = useSelector(state=>state.dailyTasks)[index];
	const taskDays = dailyTask.days;
	const listLongDays = Object.keys(task.days).filter(day => task.days[day].on);
	const listDays = listLongDays.map(day => day.substring(0,3));
	const dispatch = useDispatch();

	const onPressEdit = (index) => {
		dispatch({type: DAILY_EDIT_ON});
		dispatch({type: SET_TASK_TEXT, data: task.task_name});
		dispatch({type: SET_DAYS, data: taskDays});
		dispatch({type: SET_INDEX, data: index});
	}

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
				name="checkbox-blank-circle"
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
					onPress={() => onPressEdit(index)}
				>
					<MaterialCommunityIcons
						name = "pencil"
						size = {iconSize}
						color='white'
						style={{paddingRight: '2%'}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onDelete(index)}
				>
					<MaterialCommunityIcons
						name = "trash-can-outline"
						size = {iconSize}
						color='white'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ListNotDueDailyItem;
