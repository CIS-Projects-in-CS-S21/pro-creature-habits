import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import Task from '../databases/Task'

export default function Home() {
 Task.dropTable()
 const [tasks, setTasks] = useState([])
  const createTable = useCallback(async () => {
    await Task.createTable()
    Alert.alert('Table created successfully')
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

  if (Platform.OS === 'web') {
    return <View style={styles.container}>
      <Text>Not supported in web platform</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 20 }} onPress={createTable}>
        <Text>Create table</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20 }} onPress={createTask}>
        <Text>Create Task</Text>
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

