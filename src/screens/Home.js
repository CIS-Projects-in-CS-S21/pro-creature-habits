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
import {showMessage} from "react-native-flash-message";
import { FloatingAction } from "react-native-floating-action";
import {TASK_OFF, TASK_ON} from "../redux/createTaskModal";


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
		justifyContent: 'space-between'
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
		borderRadius: 10,
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

	const [tasks, setTasks] = useState([])

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

	const onSubmit = (task) => {
		setTasks([...tasks, task]);
		setText('');
		dispatch({type: TASK_OFF})
	}

	const onDelete = (index) => {
		setTasks([...tasks].splice(index));
		showMessage({
			message: 'task deleted',
			type: "danger",
			statusBarHeight: 52,
		})
	}

	const onComplete = (task) => {
		dispatch({type: REWARD, data: 5})
		showMessage({
			message: '5 coins have been added to your coin balance',
			type: "success",
			statusBarHeight: 52,
		})
		setTasks([...tasks].filter(item => item !== task));
	}


 	const ListItem = ({taskName, index}) => {
	  	return(
			<View style={styles.listItem}>
		  		<Text style={{color: 'white', fontSize: 20, alignItems: 'center'}} color='white'>{taskName}</Text>
		  		<View style = {{flexDirection:'row', marginRight: '5%'}}>
					<TouchableOpacity
						onPress={() => onComplete(taskName)}
					>
						<Ionicons
							name="checkmark"
							size={24}
							color='white'
							style={{paddingRight: '2%'}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => onDelete(index)}
					>
						<MaterialCommunityIcons
							name = "pencil"
							size = {24}
							color='white'
							style={{paddingRight: '2%'}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => onDelete(taskName)}
					>
						<MaterialCommunityIcons
							name = "trash-can-outline"
							size = {24}
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
		   			taskName={task}
					index={index}
				/>
		   )
	    })
	}




   const [text, setText] = React.useState('');
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
							maxLength={25}
							value={text}
							onChangeText={text => setText(text)}
							placeholder='Type a new task'
						/>
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
		</View>
  );
}




export default Home;
