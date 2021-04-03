import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {REMOVE_TASK_ONE} from "../../redux/oneTimeTasks";
import {showMessage} from "react-native-flash-message";
import {REWARD} from "../../redux/coinBalance";
import {EDIT_ON} from "../../redux/editTaskModal";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import {SET_DATE} from "../../redux/selectedDate";
import {SET_INDEX} from "../../redux/taskEditIndex";
import {useDispatch} from "react-redux";

const styles = StyleSheet.create({
	listItem: {
		paddingTop: '5%',
		paddingBottom: '5%',
		paddingLeft: '5%',
		margin: '3%',
		borderRadius: 10,
		backgroundColor: '#402688',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});


const ListDatedItem = ({task, index}) => {
	const iconSize = 40;
	const taskDate = new Date(task.date).toString().split(" ").slice(0,4).join(" ");
	const dispatch = useDispatch()

	const onDelete = (index) => {
		dispatch({type: REMOVE_TASK_ONE, data: index});
		showMessage({
			message: 'task deleted',
			type: "danger",
			statusBarHeight: 52,
		});
	}

	const onComplete = (index) => {
		dispatch({type: REMOVE_TASK_ONE, data: index});
		dispatch({type: REWARD, data: 5});
		showMessage({
			message: '5 coins have been added to your coin balance',
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
			<View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
				<Text style={{color: 'white', fontSize: 20, alignItems: 'center', width: 180}} color='white'>{task.task_name}</Text>
				<Text style={{color: 'white', fontSize: 12, alignItems: 'center', paddingTop: 5}} color='white'>
					{'Due: ' + taskDate}
				</Text>
			</View>
			<View style = {{flexDirection:'row', marginRight: '5%', alignItems: 'center'}}>
				<TouchableOpacity
					onPress={() => onComplete(index)}
				>
					<Ionicons
						name="checkmark"
						size={iconSize}
						color='white'
						style={{paddingRight: '2%'}}
					/>
				</TouchableOpacity>
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
