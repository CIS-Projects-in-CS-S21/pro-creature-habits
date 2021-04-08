import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import CalendarPicker from "react-native-calendar-picker";
import React from "react";
import {EDIT_OFF} from "../../redux/editTaskModal";
import {SET_DATE} from "../../redux/selectedDate";
import {SET_INDEX} from "../../redux/taskEditIndex";
import {EDIT_TASK_ONE} from "../../redux/oneTimeTasks";

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
	},
	textStyle: {
		color: 'white'
	}
});

const EditDatedTaskModal = () => {

	const date = useSelector(state => state.selectedDate);
	const taskEditIndex = useSelector(state => state.taskEditIndex);
	const taskText = useSelector(state => state.taskInput);

	const dispatch = useDispatch();

	const onCancelEdit = () => {
		dispatch({type: EDIT_OFF});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: SET_DATE, data: date});
		dispatch({type: SET_INDEX, data: -1});
	}

	const onSubmitEdit = () => {
		dispatch({type: EDIT_TASK_ONE, data: [taskEditIndex, taskText, date]});

		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: SET_DATE, data: date});
		dispatch({type: SET_INDEX, data: -1});

		dispatch({type: EDIT_OFF});
	}

	const onDateChange = (date) => {
		dispatch({type: SET_DATE, data: date});
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={useSelector(state=>state.editTaskVisible)}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={{color: 'white', fontSize: 30, marginBottom: 20}}>Edit Task</Text>
					<TextInput
						style={{backgroundColor: 'white', color: 'black', width: 200, height: 30, borderRadius: 5}}
						label='name'
						maxLength={35}
						value={taskText}
						onChangeText={text => dispatch({type: SET_TASK_TEXT, data: text})}
					/>
					<Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Select a due date:</Text>
					<View style={{marginTop: 20, backgroundColor: '#406be9', padding: 5, borderRadius: 5}}>
						<CalendarPicker
							onDateChange={onDateChange}
							minDate={new Date()}
							width={275}
							textStyle={{color: 'white'}}
							initialDate={date}
						/>
					</View>
					<View style={styles.modalFooter}>
						<Pressable
							style={[styles.button, {marginRight: '40%'}]}
							onPress={() => onCancelEdit()}
						>
							<Text style={styles.textStyle}>Cancel</Text>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={onSubmitEdit}
						>
							<Text style={styles.textStyle}>Submit</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default EditDatedTaskModal;
