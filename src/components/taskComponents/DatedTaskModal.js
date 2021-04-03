import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import CalendarPicker from "react-native-calendar-picker";
import {TASK_OFF} from "../../redux/createTaskModal";
import React from "react";
import {SET_DATE} from "../../redux/selectedDate";
import {ADD_TASK_ONE} from "../../redux/oneTimeTasks";
import {DAILY_TASK_OFF} from "../../redux/dailyTaskModal";

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
});

const DatedTaskModal = () => {
	const taskText = useSelector(state => state.taskInput);
	const date = useSelector(state => state.selectedDate);
	const dispatch = useDispatch();

	const onSubmit = (task) => {
		dispatch({type: ADD_TASK_ONE, data: [task, date]});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: SET_DATE, data: new Date()});
		dispatch({type: TASK_OFF});
		dispatch({type: DAILY_TASK_OFF});
	}

	const onDateChange = (date) => {
		dispatch({type: SET_DATE, data: date});
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={useSelector(state=>state.taskCreateVisible)}
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
					<Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Select a due date:</Text>
					<View style={{marginTop: 20, backgroundColor: '#406be9', padding: 5, borderRadius: 5}}>
						<CalendarPicker
							onDateChange={onDateChange}
							minDate={new Date()}
							width={275}
							textStyle={{color: 'white'}}
						/>
					</View>
					<Button title='submit'  color="#637ed0" onPress={() => onSubmit(taskText)} />
					<View style={styles.modalFooter}>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => dispatch({type: TASK_OFF})}
						>
							<Text style={{color: 'white'}}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default DatedTaskModal;
