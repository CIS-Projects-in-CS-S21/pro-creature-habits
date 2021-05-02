import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {COMPLETED_TASK_ONE, LATE_TASK_ONE, REMOVE_TASK_ONE} from "../../redux/datedTasks";
import {showMessage} from "react-native-flash-message";
import {REWARD} from "../../redux/coinBalance";
import {EDIT_ON} from "../../redux/editTaskModal";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import {SET_DATE} from "../../redux/selectedDate";
import {SET_INDEX} from "../../redux/taskEditIndex";
import {useDispatch, useSelector} from "react-redux";
import {INCREMENT_STAT} from "../../redux/statTracker";
import {ACH_PROGRESS} from "../../redux/achievementsComplete";

const styles = StyleSheet.create({
	listItem: {
		paddingTop: '4%',
		paddingBottom: '4%',
		paddingLeft: '4%',
		margin: '3%',
		marginTop: 0,
		borderRadius: 10,
		backgroundColor: '#402688',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	bgColorRed:{
		//backgroundColor: 'red',
		color:'red'

	},
	bgColorWhite:{
		//	backgroundColor: 'red',
		color:'white'
	}
});


const ListDatedItem = ({task, index}) => {
	const iconSize = 30;
	const taskDate = new Date(task.date).toString().split(" ").slice(0,4).join(" ");
	const dispatch = useDispatch();
	let reward = 5;
	const difficulty = task.difficulty;

	const onDelete = (index) => {
		dispatch({type: REMOVE_TASK_ONE, data: index});
		showMessage({
			message: 'task deleted',
			type: "danger",
			statusBarHeight: 52,
		});
	}

	const onComplete = (index) => {
		if(task.isLate === false) {
			if (difficulty === 'easy') {
				reward = 3;
			} else if (difficulty === 'medium') {
				reward = 5;
			} else {
				reward = 10;
			}
		}
		else{
			reward = 0;
		}
		dispatch({type: COMPLETED_TASK_ONE, data: index});
		dispatch({type: REWARD, data: reward});
		dispatch({type: ACH_PROGRESS, data: 'complete_dated_task'});
		dispatch({type: INCREMENT_STAT, data: 'dated_tasks_completed'});

		showMessage({
			message: reward + ' coins have been added to your coin balance',
			type: "success",
			statusBarHeight: 52,
		});

	}

	const onPressEdit = (index) => {
		dispatch({type: EDIT_ON});
		dispatch({type: SET_TASK_TEXT, data: task.task_name});
		dispatch({type: SET_DATE, data: task.date});
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
				<Text style={{color: 'white', fontSize: 12, paddingTop: 5}} color='white'>{task.task_name}</Text>
				<Text style={{color: 'white', fontSize: 12, paddingTop: 5}} color='white'>
					{'Due: ' + taskDate}
				</Text>
				<Text style={{color: 'white', fontSize: 12, paddingTop: 5}} color='white'>
					{'Difficulty: ' + task.difficulty}
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

export default ListDatedItem;
