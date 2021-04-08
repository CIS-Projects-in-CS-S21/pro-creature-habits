import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {showMessage} from "react-native-flash-message";
import {REMOVE_TASK_ONE} from "../../redux/datedTasks";

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
		alignItems: 'center',
		width: 230,
		textDecorationLine: 'line-through'
	},
	dateText: {
		color: 'white',
		fontSize: 12,
		alignItems: 'center',
		paddingTop: 5,
		textDecorationLine: 'line-through'
	}

});


const ListCompletedDatedItem = ({task, index}) => {

	const taskDate = new Date(task.date).toString().split(" ").slice(0,4).join(" ");
	const dispatch = useDispatch();

	const onDelete = (index) => {
		dispatch({type: REMOVE_TASK_ONE, data: index});
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
				style={{paddingRight: '4%'}}
			/>
			<View style={{flexDirection: 'column'}}>
				<Text style={styles.taskText} color='white'>{task.task_name}</Text>
				<Text style={styles.dateText} color='white'>
					{'Due: ' + taskDate}
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

export default ListCompletedDatedItem;
