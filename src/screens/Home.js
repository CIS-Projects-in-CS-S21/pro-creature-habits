import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput, Button } from 'react-native'
import Task from '../databases/Task';
import { SQLite } from 'expo-sqlite';
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer';

export default function Home() {

 const [tasks, setTasks] = useState([])

   Task.createTable()

 const deleteTask = useCallback(async (deleteText) => {
 	const del = deleteText
	const t = await Task.findBy({ name_eq: del })
	t.destroy()
	await t.save()
    setTasks(await Task.query())
  }, [])


  const createTask = useCallback(async (text) => {
    const props = {
      name: text,
      due: 80
    }

    const task = new Task(props)
    await task.save()
    setTasks(await Task.query())
  }, [])

 
 const onSubmit = () => {
 	createTask(text);
 }

 const onDelete = () => {
 	deleteTask(deleteText);
 }


  const [text, setText] = React.useState('');
   const [deleteText, setDeleteText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput style={{backgroundColor: 'white', width: 100}} label='name' value={text} onChangeText={text => setText(text)}/>
      <Button title="submit" color="white" onPress={onSubmit}/>
      <TextInput style={{backgroundColor: 'white', width: 100}} label='Delete' value={deleteText} onChangeText={deleteText => setDeleteText(deleteText)}/>
	  <Button title="Delete" color="white" onPress={onDelete}/>
  

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

