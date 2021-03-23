import React, { useCallback, useState } from 'react';
import { Image, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput, Button } from 'react-native'
import Task from '../databases/Task';
import UserInfo from '../databases/UserInfo';
import { SQLite } from 'expo-sqlite';
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {

 const [tasks, setTasks] = useState([])
 const [users, setUserInfo] = useState([])

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

  const awardCoins = useCallback(async() =>{
    const user = await UserInfo.findBy({'username_eq':"Pikachu"})
    user.coinBalance+=5
    await user.save()
    setUserInfo(await UserInfo.query())
})
 

const onCreate = () => {
    const props = {
        username: username,
        password: "password",
        email: email,
        coinBalance: 100, //default balance assigned

    }

    const user = new UserInfo(props)
    user.save()
    alert("User Created!");

}



 const onSubmit = async () => {
 	createTask(text);
     awardCoins();

     const user = await UserInfo.findBy({'username_eq':"Pikachu"})
     alert("Task created and coins awarded!\nYour current coin balance: "+user.coinBalance);
    //  await user.save()
    // setUserInfo(await UserInfo.query())
 }

 const onDelete = () => {
 	deleteTask(deleteText);
 }

 const ListItem = (props) => {
  const jsonObj = JSON.parse(props.value);
  
  return(
    <View style={styles.listItem}>
      
      
      <Text style={{fontWeight: 'bold', fontSize: 16}} color='white'>{jsonObj.name}</Text>
    </View>
  );
 }

 const ListOfTasks = () => {
   return tasks.map(task => {
     return(
       <ListItem key = {task.id} value={JSON.stringify(task)} />
     )
   })
 }




  const [text, setText] = React.useState('');
   const [deleteText, setDeleteText] = React.useState('');
   const[username, setUsername] = React.useState('');
   const[email, setEmail] = React.useState('');


  return (
    <View style={styles.container}>
      <TextInput style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='name' value={text} onChangeText={text => setText(text)}/>
      <Button title='submit'  color="#637ed0" onPress={onSubmit} />
        
      <TextInput style={{backgroundColor: 'white', width: '50%'}} label='Delete' value={deleteText} onChangeText={deleteText => setDeleteText(deleteText)}/>
	  <Button title="Delete" color="#637ed0" onPress={onDelete}/>
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
         <TextInput  style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='getUsername' value={username} onChangeText={username => setUsername(username)}/>
            <TextInput  style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='getEmail' value={email} onChangeText={email => setEmail(email)}/>
            <Button title='create'  color="#637ed0" onPress={onCreate} />
          
        </View>
      </View>
    </View>
  );
}
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
  },

  listFooter:{
    borderTopColor: '#FFFFFF',
    paddingLeft: '2%',
    paddingTop: '5%',
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

