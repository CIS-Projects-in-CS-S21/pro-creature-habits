import React from "react";
import ListDatedItem from "./ListDatedItem";
import {useSelector} from "react-redux";
import ListDailyItem from "./ListDailyItem";
import {View, Text, TouchableOpacity} from "react-native";
import ListCompletedDatedItem from "./ListCompletedDatedItem";
import Collapsible from "react-native-collapsible";
import {MaterialIcons} from "@expo/vector-icons";
import ListCompletedDailyItem from "./ListCompletedDailyItem";
import ListNotDueDailyItem from "./ListNotDueDailyItem";


const ListTasks = () => {
	const datedTasks = useSelector(state => state.datedTasks);
	const datedTasksDue = datedTasks.filter(task => !task.completed);
	const datedTasksCompleted = datedTasks.filter(task => task.completed);

	const dailyTasks = useSelector(state => state.dailyTasks);
	const completedDailyTasks = dailyTasks.filter(task => task.status.completed);
	const dailyTasksNotDue = dailyTasks.filter(task => !task.status.due_today);
	const dailyTasksDue = dailyTasks.filter(task => task.status.due_today && !task.status.completed)

	const [isDatedCollapsed, setIsDatedCollapsed] = React.useState(true);
	const [isDailyCollapsed, setIsDailyCollapsed] = React.useState(true);
	const [isNotDueCollapsed, setNotDueCollapsed] = React.useState(true);


	if(useSelector(state=>state.taskFilter) === 'dated') {
		return (
			<View>
				{datedTasksDue.length > 0 && <Text style={{fontSize: 30, color: 'white', padding: 20}}>To Do</Text>}
				{datedTasks.map((task, index) => {
					if (!task.completed) {
						return(
							<ListDatedItem
								key = {index}
								task={task}
								index={index}
							/>
						)
					}
				})}
				{datedTasksCompleted.length > 0 &&
				<TouchableOpacity
					onPress={() => setIsDatedCollapsed(!isDatedCollapsed)}
					style={{padding: '4%', flexDirection: 'row', justifyContent: 'space-between'}}

				>
					<Text style={{color: 'white', fontSize: 30}}>Completed ({datedTasksCompleted.length})</Text>
					{isDatedCollapsed ? (
						<MaterialIcons name='arrow-drop-down' color='white' size={40}/>
					) : (
						<MaterialIcons name='arrow-drop-up' color='white' size={40}/>
					)
					}
				</TouchableOpacity>
				}
				{datedTasks.map((task, index) => {
					if(task.completed) {
						return (
							<Collapsible
								collapsed={isDatedCollapsed}
								key={index}
							>
								<ListCompletedDatedItem
									task={task}
									key={index}
									index={index}
								/>
							</Collapsible>
						)
					}
				})}
			</View>
		)
	} else {
		return (
			<View>
				{dailyTasksDue.length > 0 && <Text style={{fontSize: 30, color: 'white', padding: 20}}>To Do</Text>}
				{dailyTasks.map((task, index) => {
					if (task.status.due_today && !task.status.completed) {
						return(
							<ListDailyItem
								key = {index}
								task={task}
								index={index}
							/>
						)
					}
				})}
				{dailyTasksNotDue.length > 0 &&
				<TouchableOpacity
					onPress={() => setNotDueCollapsed(!isNotDueCollapsed)}
					style={{padding: '4%', flexDirection: 'row', justifyContent: 'space-between'}}

				>
					<Text style={{color: 'white', fontSize: 30}}>Not Due Today ({dailyTasksNotDue.length})</Text>
					{isNotDueCollapsed? (
						<MaterialIcons name='arrow-drop-down' color='white' size={40}/>
					) : (
						<MaterialIcons name='arrow-drop-up' color='white' size={40}/>
					)
					}
				</TouchableOpacity>
				}
				{dailyTasks.map((task, index) => {
					if (!task.status.due_today){
						return(
							<Collapsible
								collapsed={isNotDueCollapsed}
								key={index}
							>
								<ListNotDueDailyItem
									task={task}
									key={index}
									index={index}
								/>
							</Collapsible>
						)
					}
				})}
				{completedDailyTasks.length > 0 &&
				<TouchableOpacity
					onPress={() => setIsDailyCollapsed(!isDailyCollapsed)}
					style={{padding: '4%', flexDirection: 'row', justifyContent: 'space-between'}}

				>
					<Text style={{color: 'white', fontSize: 30}}>Completed Today ({completedDailyTasks.length})</Text>
					{isDailyCollapsed ? (
						<MaterialIcons name='arrow-drop-down' color='white' size={40}/>
					) : (
						<MaterialIcons name='arrow-drop-up' color='white' size={40}/>
					)
					}
				</TouchableOpacity>
				}
				{dailyTasks.map((task, index) => {
					if (task.status.completed) {
						return (
							<Collapsible
								collapsed={isDailyCollapsed}
								key={index}
							>
								<ListCompletedDailyItem
									task={task}
									key={index}
									index={index}
								/>
							</Collapsible>
						)
					}
				})}
			</View>
		)
	}
}

export default ListTasks;
