import React from "react";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";

const ListTasks = () => {
	const tasks = useSelector(state => state.oneTimeTasks);
	return tasks.map((task, index) => {
		return(
			<ListItem key = {index}
					  task={task}
					  index={index}
			/>
		)
	})
}

export default ListTasks;
