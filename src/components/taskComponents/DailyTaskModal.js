import {useDispatch, useSelector} from "react-redux";
import {Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import CheckboxGroup from "./CheckboxGroup";
import {DAILY_TASK_OFF} from "../../redux/dailyTaskModal";
import React from "react";
import {ADD_TASK_DAILY} from "../../redux/dailyTasks";
import {RESET_DAYS} from "../../redux/daysChecked";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 10,
		backgroundColor: '#341f6f',
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#7276e3'
	},
	button: {
		borderRadius: 10,
		padding: 10,
		elevation: 2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#2196F3"
	},
	modalFooter: {
		flexDirection: 'row',
		paddingTop: 15,
		width: "80%",
	}
})

const DailyTaskModal = () => {
	const days = useSelector(state => state.daysChecked);
	const taskText = useSelector(state => state.taskInput);
	const dispatch = useDispatch();

	const onSubmit = (task) => {
		dispatch({type: ADD_TASK_DAILY, data: [task, days]});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: RESET_DAYS});
		dispatch({type: DAILY_TASK_OFF});
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={useSelector(state=>state.dailyTaskVisible)}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TextInput
						style={{backgroundColor: 'white', color: 'black', width: 200, height: 30, borderRadius: 5}}
						label='name'
						maxLength={35}
						value={taskText}
						onChangeText={text => dispatch({type: SET_TASK_TEXT, data: text})}
						placeholder='Type a new task'
					/>
					<CheckboxGroup/>
					<View style={styles.modalFooter}>
						<Pressable
							style={[styles.button, {marginRight: '20%'}]}
							onPress={() => {
								dispatch({type: DAILY_TASK_OFF})
								dispatch({type: RESET_DAYS})
							}}
						>
							<Text style={{color: 'white'}}>Cancel</Text>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={() => onSubmit(taskText)}
						>
							<Text style={{color: 'white'}}>Submit</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default DailyTaskModal;
