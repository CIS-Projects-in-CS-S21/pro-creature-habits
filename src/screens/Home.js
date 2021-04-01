import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	Button,
	Modal,
	Pressable
} from 'react-native'
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {REWARD} from "../redux/coinBalance";
import { FloatingAction } from "react-native-floating-action";
import {TASK_OFF, TASK_ON} from "../redux/createTaskModal";
import CalendarPicker from "react-native-calendar-picker";
import { showMessage } from "react-native-flash-message";
import {EDIT_OFF, EDIT_ON} from "../redux/editTaskModal";

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
	listItem:{
		paddingTop: '5%',
		paddingBottom: '5%',
		paddingLeft: '5%',
		margin: '3%',
		borderRadius: 10,
		backgroundColor: '#402688',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
});

const Home = () => {
	const dispatch = useDispatch();

	const [tasks, setTasks] = useState([]);
	const [date, setDate] = useState(new Date());
	const [editIndex, setEditIndex] = useState(-1);
	const [text, setText] = React.useState('');


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
		setDate(date);
	}

	const onSubmit = (task) => {
		setTasks([...tasks, {task_name: task, date: date}]);
		setText('');
		setDate(new Date());
		dispatch({type: TASK_OFF});
	}

	const onDelete = (index) => {
		setTasks([...tasks].filter((item, num) => num !== index));
		showMessage({
			message: 'task deleted',
			type: "danger",
			statusBarHeight: 52,
		});
	}

	const onComplete = (index) => {
		setTasks([...tasks].filter((item, num) => num !== index));
		dispatch({type: REWARD, data: 5});
		showMessage({
			message: '5 coins have been added to your coin balance',
			type: "success",
			statusBarHeight: 52,
		});

	}

	const onPressEdit = (index) => {
		dispatch({type: EDIT_ON});
		setText(tasks[index].task_name);
		setDate(tasks[index].date);
		setEditIndex(index);
	}

	const onCancelEdit = () => {
		dispatch({type: EDIT_OFF});
		setText('');
		setDate(new Date());
		setEditIndex(-1);
	}

	const onSubmitEdit = () => {
		let editTasks = [...tasks];
		editTasks[editIndex].task_name = text;
		editTasks[editIndex].date = date;

		setText('');
		setDate(new Date());
		setEditIndex(-1);

		dispatch({type: EDIT_OFF});
	}

	const iconSize = 40;
 	const ListItem = ({taskName, index}) => {
 		const taskDate = new Date(tasks[index].date).toString().split(" ").slice(0,4).join(" ");
	  	return(
			<View style={styles.listItem}>
				<View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
					<Text style={{color: 'white', fontSize: 20, alignItems: 'center', width: 180}} color='white'>{taskName}</Text>
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

	const ListOfTasks = () => {
	    return tasks.map((task, index) => {
		 	return(
		   		<ListItem key = {index}
		   			taskName={task.task_name}
					index={index}
				/>
		   )
	    })
	}
	return (
  		<View style={{flex: 1}}>
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.container}>
					<View style={styles.listContainer}>
						<ListOfTasks />
					</View>
				</View>
			</ScrollView>
			<FloatingAction
				actions={actions}
				onPressItem={() => {
					dispatch({type: TASK_ON})
				}}
			/>
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
							value={text}
							onChangeText={text => setText(text)}
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
						<Button title='submit'  color="#637ed0" onPress={() => onSubmit(text)} />
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
							value={text}
							onChangeText={text => setText(text)}
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
