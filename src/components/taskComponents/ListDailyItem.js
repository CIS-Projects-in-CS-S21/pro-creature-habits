import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {showMessage} from "react-native-flash-message";
import {REWARD} from "../../redux/coinBalance";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import {SET_INDEX} from "../../redux/taskEditIndex";
import {useDispatch, useSelector} from "react-redux";
import {REMOVE_TASK_DAILY} from "../../redux/dailyTasks";
import {DAILY_EDIT_ON} from "../../redux/editDailyTaskModal";
import {SET_DAYS} from "../../redux/daysChecked";
import {ADD_COMP_TASK_DAILY} from "../../redux/completedDailyTasks";

const styles = StyleSheet.create({
	listItem: {
		paddingTop: '4%',
		paddingBottom: '4%',
		paddingLeft: '4%',
		margin: '3%',
		borderRadius: 10,
		marginTop: 0,
		backgroundColor: '#402688',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});


const ListDailyItem = ({task, index}) => {
	const iconSize = 30;
	const taskDays = useSelector(state => state.dailyTasks)[index].days;
	const listLongDays = Object.keys(taskDays).filter(day => taskDays[day].on);
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

	const onComplete = (index) => {
		dispatch({type: ADD_COMP_TASK_DAILY, data: task})
		dispatch({type: REMOVE_TASK_DAILY, data: index});
		dispatch({type: REWARD, data: 5});
		showMessage({
			message: '5 coins have been added to your coin balance',
			type: "success",
			statusBarHeight: 52,
		});

	}

	const onPressEdit = (index) => {
		dispatch({type: DAILY_EDIT_ON});
		dispatch({type: SET_TASK_TEXT, data: task.task_name});
		dispatch({type: SET_DAYS, data: taskDays});
		dispatch({type: SET_INDEX, data: index});
	}

	return(
		<View style={styles.listItem}>
			<TouchableOpacity
				onPress={() => onComplete(index)}
			>
				<MaterialCommunityIcons
					name="checkbox-blank-circle-outline"
					size={30}
					color='white'
				/>
			</TouchableOpacity>
			<View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
				<Text style={{color: 'white', fontSize: 20, alignItems: 'center', width: 195}} color='white'>{task.task_name}</Text>
				<Text style={{color: 'white', fontSize: 12, alignItems: 'center', paddingTop: 5}} color='white'>
					{listDays.join(' ')}
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

export default ListDailyItem;
