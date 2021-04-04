import React from "react";
import ListDatedItem from "./ListDatedItem";
import {useSelector} from "react-redux";
import ListDailyItem from "./ListDailyItem";
import {View, Text, TouchableOpacity} from "react-native";
import ListCompletedDatedItem from "./ListCompletedDatedItem";
import Collapsible from "react-native-collapsible";
import {MaterialIcons} from "@expo/vector-icons";
import ListCompletedDailyItem from "./ListCompletedDailyItem";


const ListTasks = () => {
	const datedTasks = useSelector(state => state.oneTimeTasks);
	const dailyTasks = useSelector(state => state.dailyTasks);
	const completedDatedTasks = useSelector(state => state.completedDatedTasks);
	const completedDailyTasks = useSelector(state => state.completedDailyTasks);

	const [isDatedCollapsed, setIsDatedCollapsed] = React.useState(true);
	const [isDailyCollapsed, setIsDailyCollapsed] = React.useState(true);

	if(useSelector(state=>state.taskFilter) === 'dated') {
		return (
			<View>
				{datedTasks.length > 0 && <Text style={{fontSize: 30, color: 'white', padding: 20}}>To Do</Text>}
				{datedTasks.map((task, index) => {
					return(
						<ListDatedItem
							key = {index}
							task={task}
							index={index}
						/>
					)
				})}
				{completedDatedTasks.length > 0 &&
				<TouchableOpacity
					onPress={() => setIsDatedCollapsed(!isDatedCollapsed)}
					style={{padding: '4%', flexDirection: 'row', justifyContent: 'space-between'}}

				>
					<Text style={{color: 'white', fontSize: 30}}>Completed ({completedDatedTasks.length})</Text>
					{isDatedCollapsed ? (
						<MaterialIcons name='arrow-drop-down' color='white' size={40}/>
					) : (
						<MaterialIcons name='arrow-drop-up' color='white' size={40}/>
					)
					}
				</TouchableOpacity>
				}
				{completedDatedTasks.map((task, index) => {
					return(
						<Collapsible
							collapsed={isDatedCollapsed}
							key={index}
						>
							<ListCompletedDatedItem
								task={task}
								key={index}
							/>
						</Collapsible>
					)
				})}
			</View>
		)
	} else {
		return (
			<View>
				{dailyTasks.length > 0 && <Text style={{fontSize: 30, color: 'white', padding: 20}}>To Do</Text>}
				{dailyTasks.map((task, index) => {
					return(
						<ListDailyItem
							key = {index}
							task={task}
							index={index}
						/>
					)
				})}
				{completedDailyTasks.length > 0 &&
				<TouchableOpacity
					onPress={() => setIsDailyCollapsed(!isDailyCollapsed)}
					style={{padding: '4%', flexDirection: 'row', justifyContent: 'space-between'}}

				>
					<Text style={{color: 'white', fontSize: 30}}>Completed Today({completedDailyTasks.length})</Text>
					{isDailyCollapsed ? (
						<MaterialIcons name='arrow-drop-down' color='white' size={40}/>
					) : (
						<MaterialIcons name='arrow-drop-up' color='white' size={40}/>
					)
					}
				</TouchableOpacity>
				}
				{completedDailyTasks.map((task, index) => {
					return(
						<Collapsible
							collapsed={isDailyCollapsed}
							key={index}
						>
							<ListCompletedDailyItem
								task={task}
								key={index}
							/>
						</Collapsible>
					)
				})}
			</View>
		)
	}
}

export default ListTasks;
