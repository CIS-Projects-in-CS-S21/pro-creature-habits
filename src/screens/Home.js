import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Modal,
	Pressable,
	TouchableHighlight
} from 'react-native'
import {useDispatch, useSelector} from "react-redux";

import { FloatingAction } from "react-native-floating-action";
import {TASK_OFF, TASK_ON} from "../redux/createTaskModal";
import CalendarPicker from "react-native-calendar-picker";
import {EDIT_OFF} from "../redux/editTaskModal";
import {ADD_TASK_ONE, EDIT_TASK_ONE} from "../redux/oneTimeTasks";
import ListTasks from "../components/taskComponents/ListTasks";
import {SET_DATE} from "../redux/selectedDate";
import {SET_INDEX} from "../redux/taskEditIndex";
import {SET_TASK_TEXT} from "../redux/taskInput";
import {DAILY_TASK_OFF, DAILY_TASK_ON} from "../redux/dailyTaskModal";


//test
const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: '#406BE9',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#406be9'
	},

	listContainer:{
		alignItems: 'stretch'

	},
	listFooter:{
		borderTopColor: '#FFFFFF',
		paddingLeft: '2%',
		paddingTop: '5%',
	},
	text: {
		color: 'white',
	},
	weather: {
		color: 'white',
		fontSize: 30,
	},
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
	},
	filterButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'stretch',
		backgroundColor: '#305ccd',
		height: '7%',

	},
	filterButton: {
		paddingTop: "3%",
		flex: 1,
		alignItems: 'center',
		borderRadius: 10
	},
	filterButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
});

const Home = () => {
	const dispatch = useDispatch();
	const date = useSelector(state => state.selectedDate);
	const taskEditIndex = useSelector(state => state.taskEditIndex);
	const taskText = useSelector(state => state.taskInput);

	const [selectedButton, setSelectedButton] = React.useState(0);

	const actions = [
		{
			text: 'Daily Task',
			icon: require("../IconImages/calendar.png"),
			name: 'bt_daily',
			position: 1
		},
		{
			text: 'One Time Task',
			icon: require("../IconImages/compose.png"),
			name: 'bt_one_time',
			position: 2
		}
	]

	const onDateChange = (date) => {
		dispatch({type: SET_DATE, data: date});
	}

	const onSubmit = (task) => {
		dispatch({type: ADD_TASK_ONE, data: [task, date]});
		dispatch({type: SET_TASK_TEXT, data: ''});
		dispatch({type: SET_DATE, data: new Date()});
		dispatch({type: TASK_OFF});
		dispatch({type: DAILY_TASK_OFF});
	}

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

	const onFilterPress = (button) => {
		setSelectedButton(button);
	}

	return (
  		<View style={{flex: 1}}>
			<View style={styles.filterButtonsContainer}>
				<TouchableHighlight
					style={[styles.filterButton, selectedButton === 0 ? {backgroundColor: 'white'} : {}]}
					onPress={() => onFilterPress(0)}
					underlayColor={'lightgrey'}
				>
					<Text style={[styles.filterButtonText, selectedButton === 0 ? {color: '#402688'} : {}]}>Daily Tasks</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={[styles.filterButton, selectedButton === 1 ? {backgroundColor: 'white'} : {}]}
					onPress={() => onFilterPress(1)}
					underlayColor={'lightgrey'}
				>
					<Text style={[styles.filterButtonText, selectedButton === 1 ? {color: '#402688'} : {}]}>Dated Tasks</Text>
				</TouchableHighlight>
			</View>
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.container}>
					<View style={styles.listContainer}>
						<ListTasks/>
					</View>
				</View>
			</ScrollView>
			<FloatingAction
				actions={actions}
				onPressItem={name => {
					name === 'bt_one_time' ? dispatch({type: TASK_ON}) : dispatch({type: DAILY_TASK_ON})
				}}
			/>
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
						<Button title='submit'  color="#637ed0" onPress={() => onSubmit(taskText)} />
						<View style={styles.modalFooter}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => dispatch({type: DAILY_TASK_OFF})}
							>
								<Text style={styles.textStyle}>Cancel</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
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
								<Text style={styles.textStyle}>Cancel</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
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
		</View>
  );
}




export default Home;
