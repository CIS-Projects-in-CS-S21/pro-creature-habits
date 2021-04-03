import React from "react";
import ListDatedItem from "./ListDatedItem";
import {useSelector} from "react-redux";
import ListDailyItem from "./ListDailyItem";

const ListTasks = () => {
	const datedTasks = useSelector(state => state.oneTimeTasks);
	const dailyTasks = useSelector(state => state.dailyTasks);

	if(useSelector(state=>state.taskFilter) === 'daily') {
		return dailyTasks.map((task, index) => {
			return(
				<ListDailyItem key = {index}
							   task={task}
							   index={index}
				/>
			)
		})
	} else {
		return datedTasks.map((task, index) => {
			return(
				<ListDatedItem key = {index}
							   task={task}
							   index={index}
				/>
			)
		})
	}
}

export default ListTasks;
