import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import CalendarPicker from "react-native-calendar-picker";
import {TASK_OFF} from "../../redux/createTaskModal";
import React from "react";
import {SET_DATE} from "../../redux/selectedDate";
import {ADD_TASK_ONE} from "../../redux/datedTasks";
import {DAILY_TASK_OFF} from "../../redux/dailyTaskModal";
import CheckboxGroup from "./CheckboxGroup";
import DifficultyOptions from "../DifficultyOptions";
import DifficultySelect from "./DifficultySelect";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
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
});

const DatedTaskModal = () => {
	const taskText = useSelector(state => state.taskInput);
	const date = useSelector(state => state.selectedDate);
	const difficulty = useSelector(state => state.difficultyCheck);
	const dispatch = useDispatch();

	const onSubmit = (task) => {
		dispatch({type: ADD_TASK_ONE, data: [task, date, difficulty]});
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
					<View>
						<Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Choose a Difficulty Level:</Text>
					</View>
					<DifficultySelect/>
					<View style={styles.modalFooter}>

						<Pressable
							style={[styles.button, {marginRight: '40%'}]}
							onPress={() => dispatch({type: TASK_OFF})}
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

export default DatedTaskModal;
