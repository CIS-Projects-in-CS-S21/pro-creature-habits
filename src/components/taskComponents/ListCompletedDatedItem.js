import {Text, View, StyleSheet} from "react-native";
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
		backgroundColor: '#8599ff',
		flexDirection: 'row',
		alignItems: 'center'
	},
	taskText: {
		color: 'white',
		fontSize: 20,
		alignItems: 'center',
		width: 180,
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


const ListCompletedDatedItem = ({task}) => {

	const taskDate = new Date(task.date).toString().split(" ").slice(0,4).join(" ");

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
		</View>
	);
}

export default ListCompletedDatedItem;
