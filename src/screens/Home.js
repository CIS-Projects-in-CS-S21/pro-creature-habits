import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import {useDispatch} from "react-redux";

import { FloatingAction } from "react-native-floating-action";
import {TASK_ON} from "../redux/createTaskModal";
import ListTasks from "../components/taskComponents/ListTasks";
import {DAILY_TASK_ON} from "../redux/dailyTaskModal";
import DailyTaskModal from "../components/taskComponents/DailyTaskModal";
import DatedTaskModal from "../components/taskComponents/DatedTaskModal";
import EditDatedTaskModal from "../components/taskComponents/EditDatedTaskModal";
import {DAILY, DATED} from "../redux/taskFilter";


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
	];

	const onFilterPress = (button) => {
		setSelectedButton(button);
	}

	return (
  		<View style={{flex: 1}}>
			<View style={styles.filterButtonsContainer}>
				<TouchableHighlight
					style={[styles.filterButton, selectedButton === 0 ? {backgroundColor: 'white'} : {}]}
					onPress={() => {
						onFilterPress(0);
						dispatch({type: DAILY})
					}}
					underlayColor={'lightgrey'}
				>
					<Text style={[styles.filterButtonText, selectedButton === 0 ? {color: '#402688'} : {}]}>Daily Tasks</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={[styles.filterButton, selectedButton === 1 ? {backgroundColor: 'white'} : {}]}
					onPress={() => {
						onFilterPress(1);
						dispatch({type: DATED})
					}}
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
			<DailyTaskModal/>
			<DatedTaskModal/>
			<EditDatedTaskModal/>
		</View>
  );
}




export default Home;
