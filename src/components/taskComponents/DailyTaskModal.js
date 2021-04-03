import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import CheckboxGroup from "./CheckboxGroup";
import {DAILY_TASK_OFF} from "../../redux/dailyTaskModal";
import React from "react";
import {ADD_TASK_ONE} from "../../redux/oneTimeTasks";
import {SET_DATE} from "../../redux/selectedDate";
import {TASK_OFF} from "../../redux/createTaskModal";
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
		backgroundColor: '#402688',
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	button: {
		borderRadius: 7,
		width: '75%',
		alignItems: 'center',
		padding: 10,
		elevation: 2,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	modalFooter: {
		flexDirection: 'row',
		paddingTop: 15
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
					<Button title='submit'  color="#637ed0" onPress={() => onSubmit(taskText)} />
					<View style={styles.modalFooter}>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => {
								dispatch({type: DAILY_TASK_OFF})
								dispatch({type: RESET_DAYS})
							}}
						>
							<Text style={{color: 'white'}}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default DailyTaskModal;
