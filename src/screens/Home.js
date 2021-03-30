import React, { useCallback, useState } from 'react';
import { Image, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput, Button } from 'react-native'
import Task from '../databases/Task';
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {REWARD} from "../redux/coinBalance";
import {showMessage} from "react-native-flash-message";
import {ItemInventory} from "../components/ItemInventory";

//test
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#406be9',

	},

	listContainer:{
		backgroundColor: 'rgba(49,69,194,0.7)',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		borderWidth: 3,
		borderColor: 'black',
		width: '75%',
		height: '80%',
		marginTop: '2%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '5%',
	},
	listItem:{
		paddingTop: '5%',
		paddingBottom: '5%',
		paddingLeft: '5%',
		margin: '3%',
		borderRadius: 10,
		backgroundColor: 'white',
		alignContent: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
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
	}
});

const Home = () => {
	const dispatch = useDispatch();

	const [tasks, setTasks] = useState([])

	const onSubmit = (task) => {
		setTasks([...tasks, task]);
		setText('');
	}

	const onDelete = (task) => {
		setTasks([...tasks].filter(item => item !== task));
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


 	const ListItem = ({taskName}) => {
	  	return(
			<View style={styles.listItem}>
		  		<Text style={{fontWeight: 'bold', fontSize: 16, maxWidth:'77%'}} color='white'>{taskName}</Text>
		  		<View style = {{flexDirection:'row'}}>
					<TouchableOpacity
						onPress={() => onDelete(taskName)}
					>
						<MaterialCommunityIcons
							name = "trash-can-outline"
							size = {24}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => onComplete(taskName)}
					>
						<Ionicons
							name="checkmark"
							size={24}
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
				/>
		   )
	    })
	}




   const [text, setText] = React.useState('');
   const [deleteText, setDeleteText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='name' value={text} onChangeText={text => setText(text)}/>
      <Button title='submit'  color="#637ed0" onPress={() => onSubmit(text)} />
      <View style={styles.listContainer}>
        <ScrollView>

          <ListOfTasks />

        </ScrollView>
        <View style={styles.listFooter}>
          <Image
              style={{width: 70, height: 55}}
              source={{
                uri: 'https://i.imgur.com/tkSiusr.gif',
              }}
            />
        </View>
      </View>
    </View>
  );
}


export default Home;
