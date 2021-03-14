import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput } from 'react-native'
import Task from '../databases/Task';
import { SQLite } from 'expo-sqlite';
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer';

export default function Home() {

 const [tasks, setTasks] = useState([])

   Task.createTable()

 const deleteTask = useCallback(async () => {
	const t = await Task.findBy({ name_eq: "hi" })
	t.destroy()
    setTasks(await Task.query())
  }, [])


  const createTask = useCallback(async () => {
    const props = {
      name: 'hi',
      due: 80
    }

    const task = new Task(props)
    await task.save()
    setTasks(await Task.query())
  }, [])


  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Task Name"
      />
      <TouchableOpacity style={{ padding: 20 }} onPress={createTask}>
        <Text>Submit New Task</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{ padding: 20 }} onPress={deleteTask}>
        <Text>Delete Task</Text>
      </TouchableOpacity>

      <ScrollView style={{ flex: 1 }}>
        {
          tasks.map(task => <Text key={task.id}>{JSON.stringify(task)}</Text>)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#406BE9',
	},
	text: {
		color: 'white'

	},
	weather: {
		color: 'white',
		fontSize: 30,
	}
});

const HomeScreen = () => {


	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>
		</View>
	);
};

