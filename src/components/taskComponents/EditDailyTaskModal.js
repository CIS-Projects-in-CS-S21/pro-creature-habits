import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SET_TASK_TEXT} from "../../redux/taskInput";
import React from "react";
import {SET_INDEX} from "../../redux/taskEditIndex";
import CheckboxGroup from "./CheckboxGroup";
import {DAILY_EDIT_OFF} from "../../redux/editDailyTaskModal";
import {RESET_DAYS} from "../../redux/daysChecked";
import {EDIT_TASK_DAILY} from "../../redux/dailyTasks";

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

const EditDailyTaskModal = () => {

	const days = useSelector(state => state.daysChecked);
	const taskEditIndex = useSelector(state => state.taskEditIndex);
	const taskText = useSelector(state => state.taskInput);

	const dispatch = useDispatch();

	const onCancelEdit = () => {
		dispatch({type: DAILY_EDIT_OFF});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: RESET_DAYS});
		dispatch({type: SET_INDEX, data: -1});
	}

	const onSubmitEdit = () => {
		dispatch({type: EDIT_TASK_DAILY, data: [taskEditIndex, taskText, days]});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: RESET_DAYS});
		dispatch({type: SET_INDEX, data: -1});

		dispatch({type: DAILY_EDIT_OFF});
	}


	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={useSelector(state=>state.dailyEditModal)}
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
					<Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Days:</Text>
					<CheckboxGroup/>
					<Button title='submit'  color="#637ed0" onPress={onSubmitEdit}/>
					<View style={styles.modalFooter}>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => onCancelEdit()}
						>
							<Text style={styles.textStyle}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default EditDailyTaskModal;
