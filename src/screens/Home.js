import React, { useCallback, useState } from 'react';
import { Image, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput, Button } from 'react-native'
import Task from '../databases/Task';
import UserInfo from '../databases/UserInfo';
import { SQLite } from 'expo-sqlite';
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default function Home() {

//global variables for storing list object
 const [tasks, setTasks] = useState([])
 //const [users, setUserInfo] = useState([]) // there might be problem with not storing any users

 //create these tables during the active state 
 // this doesn't seem to be a problem for some reason
 // maybe because state is preserved
Task.createTable()
UserInfo.createTable()

 

   //delete a task in sqlite with specified text
 const deleteTask = useCallback(async (deleteText) => {
 	const del = deleteText
	const t = await Task.findBy({ name_eq: del })
	t.destroy()
	await t.save()
    setTasks(await Task.query())
  }, [])

//create a task in sqlite with specified text
  const createTask = useCallback(async (text) => {
    const props = {
      name: text,
      due: "", //means not set
    }

    const task = new Task(props)
    await task.save()
    setTasks(await Task.query())
  }, [])

//   const taskExists = useCallback(async(text)=>{
//     const status = 1;
//     const task = await Task.findBy({'name_eq':text});
//     if (task==undefined){
//         status=0;
//     }
//     return status;
// })

// const userExists = useCallback(async(user)=>{
//     const status = 1;
//     const user = await UserInfo.findBy({'username_eq':user});
//     if (user==undefined){
//         status=0;
//     }
//     return status;
// })

//award coins to a specified user
  const awardCoins = useCallback(async() =>{
    // if(userExists('Pikachu')){
        const user = await UserInfo.findBy({'username_eq':"Pikachu"})
        //alert(user.username+" was found in userinfo.db! with coin balance: "+user.coinBalance);
        user.coinBalance+=5
        // const temp = {
        //     'username':user.username,
        //     'coinBalance':user.coinBalance,
        // }
        alert(user.username+" now has coin balance of: "+user.coinBalance);
        await user.save()
    // }

    //return temp;
    // setUserInfo(await UserInfo.query())
})



const getMonth = (x) => {
    var temp = '';
    for(var i=0; i<=2;i++){
        temp+=x[i];
    }
    //alert(temp);
    return temp;
}
const getDay = (x) => {
    var temp = '';
    for(var i=4; i<=5;i++){
        temp+=x[i];
    }
    //alert(typeof(parseInt(temp)));
    return parseInt(temp);
}
const getYear = (x) => {
    var temp = '';
    for(var i=7; i<=10;i++){
        temp+=x[i];
    }
    return parseInt(temp);
}
const getHour = (x) => {
    var temp = '';
    for(var i=12; i<=13;i++){
        temp+=x[i];
    }
    return parseInt(temp);
}
const getMinute = (x) => {
    var temp = '';
    for(var i=15; i<=16;i++){
        temp+=x[i];
    }
    return parseInt(temp);
}

const parseDate = (x) => {
    //x = new Date()
    var temp="";
    if(typeof(x)!='string'){
        x = x.toString();

        for(i=4; i<=20; i++){
            temp+=x[i];
        }
        x = temp.slice();

        temp = "";
    }

    props = {
        'year':getYear(x),
        'month':getMonth(x),
        'day':getDay(x),
        'hour':getHour(x),
        'minute':getMinute(x)
    };


    return props;
}

// const convDateToString = (x) => {
//     //x should be of type new Date()
//     var temp="";
//     x = String(x);
//     for(i=4; i<=20; i++){
//         temp+=x[i];
//     }
//     x = temp.slice();
//     temp = "";

//     return x;
//  }

const getMonthStr = (x) => {
    //x is a number eg. 3
    var newx = '';
    var list = ['Jan','Feb', 'Mar', 
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for(var i=0; i<list.length; i++){
        if(x==i+1){
            newx = list[i];
        }
    }
    return newx;
}
const getMonthNum = (x) => {
    //x is a string eg 'Mar'

    var newx = 0;
    var list = ['Jan','Feb', 'Mar', 
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for(var i=0; i<list.length; i++){
        if(x==list[i]){
            newx = i+1;
        }
    }

    console.log(newx);
    return newx;
}

//create deadline for a specified task by name when user sets the due date in
//mostly numbers
const createDeadline = useCallback(async(year,month,day,hour,minute, taskName1) => {
    const props = {
        'name':taskName1.toString(),
        'year':year.toString(),
        'month':getMonthStr(month).toString(),
        'day':day.toString(),
        'hour':hour.toString(),
        'minute':minute.toString(),

    };
    
    //props here should have name, month, day, year, hour, min
    const task = await Task.findBy({'name_eq':props.name})
    var temp = '';
    if (task.due==""){ // set
        temp+=props.month;
        temp+=" ";
        temp+=props.day;
        temp+=" ";
        temp+=props.year;
        temp+=" ";
        temp+=props.hour;
        temp+=":";
        temp+=props.minute;
    }

    task.due = temp.slice();
    temp = '';
    alert("Deadline created for "+props.name+" for "+task.due+"!");
    await task.save(); 
})


const checkDeadline = useCallback(async(taskName2) => {
    //props should be a task object, taskName should be a string
    
    const task = await Task.findBy({'name_eq':taskName2})
    var status = task.name+" was completed after the due date!"; //string
    
    const x = parseDate(new Date()); //curr
    const y = parseDate(task.due); //deadline
    //alert("current date: "+x.year+" "+x.month+" "+x.day+" "+x.hour+" "+x.minute);
    //alert((new Date()).toString());
    //alert('curr month '+getMonthNum(x.month)+" and the deadline month is "+getMonthNum(y.month));
    if(x.year<y.year){
        status= task.name+" was completed before the due date!";
        
    }
    else if(x.year==y.year){
        if(getMonthNum(x.month)<getMonthNum(y.month)){
           
            status= task.name+" was completed before the due date!";
            
        }
        else if(getMonthNum(x.month)==getMonthNum(y.month)){
            if(x.day<y.day){
                status= task.name+" was completed before the due date!";
                
            }
            else if(x.day==y.day){
                if(x.hour<y.hour){
                    status= task.name+" was completed before the due date!";
                    
                }
                else if(x.hour==y.hour){
                    if(x.minute<=y.minute){
                        status= task.name+" was completed before the due date!";
                        
                    }
                }
            }
        }
    }
    alert(status);

    if(status==task.name+" was completed before the due date!"){
        alert(status);
        awardCoins();
    }

    
})
 

////////////////////////////////////////////////////////////////////////

const onCheckDeadline = () => {
    checkDeadline(taskName2);
    deleteTask(taskName2);

}

const onCreateDeadline = () => {
    createDeadline(year,month,day,hour,minute, taskName1);
    //taskName1 = setTaskName1(taskName1).clear()
}
//do some thing when create button is pressed
//here it takes textinput variables to store user object into userinfo.db
const onCreate = () => {
    const props = {
        'username': username,
        'password': "password",
        'email': email,
        'coinBalance': 100, //default balance assigned

    }

    const user = new UserInfo(props);
    alert("User: "+user.username+" with coin balance: "+user.coinBalance+" Created!");
    user.save();
}


//does something with submit button is pressed
 const onSubmit = async () => {
 	createTask(text);
    //awardCoins();

     //const user = await UserInfo.findBy({'username_eq':"Pikachu"})
     //alert("Task created and coins awarded!\nYour current coin balance: "+user.coinBalance);
    //  await user.save()
    // setUserInfo(await UserInfo.query())
 }

//does something when delete button is pressed
 const onDelete = () => {
 	deleteTask(deleteText);
 }

//given props object, returns a view for a props
 const ListItem = (props) => {
  const jsonObj = JSON.parse(props.value);
  
  return(
    <View style={styles.listItem}>
      
      
      <Text style={{fontWeight: 'bold', fontSize: 16}} color='white'>{jsonObj.name}</Text>
    </View>
  );
 }

 //Lists tasks in sqlite task.db with ListItem tag view created above
 const ListOfTasks = () => {
   return tasks.map(task => {
     return(
       <ListItem key = {task.id} value={JSON.stringify(task)} />
     )
   })
 }

/////////////////////////////////////////////////////////////////////////////


  const [text, setText] = React.useState('');
   const [deleteText, setDeleteText] = React.useState('');
   const[username, setUsername] = React.useState('');
   const[email, setEmail] = React.useState('');
   const[taskName1, setTaskName1] = React.useState('');
   const[taskName2, setTaskName2] = React.useState('');
   const[year, setYear] = React.useState('');
   const[month, setMonth] = React.useState('');
   const[day, setDay] = React.useState('');
   const[hour, setHour] = React.useState('');
   const[minute, setMinute] = React.useState('');

///////////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container}>
      <TextInput style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='name' value={text} onChangeText={text => setText(text)}/>
      <Button title='submit'  color="#637ed0" onPress={onSubmit} />
        
      <TextInput style={{backgroundColor: 'white', width: '50%'}} label='Delete' value={deleteText} onChangeText={deleteText => setDeleteText(deleteText)}/>
	  <Button title="Delete" color="#637ed0" onPress={onDelete}/>

      {/* <TextInput placeholder="task name" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='taskName1' value={taskName1} onChangeText={taskName1 => setTaskName1(taskName1)}/>
      <TextInput placeholder="year eg. 2021" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='year' value={year} onChangeText={year => setYear(year)}/>
      <TextInput placeholder="month eg. 2" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='month' value={month} onChangeText={month => setMonth(month)}/>
      <TextInput placeholder="day eg. 01" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='day' value={day} onChangeText={day => setDay(day)}/>
      <TextInput placeholder="hour eg. 01" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='hour' value={hour} onChangeText={hour => setHour(hour)}/>
      <TextInput placeholder="minute eg. 01" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='minute' value={minute} onChangeText={minute => setMinute(minute)}/>  
      <Button title='create deadline'  color="#637ed0" onPress={onCreateDeadline} /> */}
      
      {/* <TextInput placeholder="task name" style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='taskName2' value={taskName2} onChangeText={taskName2 => setTaskName2(taskName2)}/>
      <Button title='complete task'  color="#637ed0" onPress={onCheckDeadline} /> */}
      
      <View style={styles.listContainer}>
        <ScrollView>

       

          <ListOfTasks />
          
        </ScrollView>
        <View style={styles.listFooter}>
          <Image
              style={{width: 60, height: 40}}
              source={{
                uri: 'https://i.imgur.com/tkSiusr.gif',
              }}
            />
         {/* <TextInput  style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='getUsername' value={username} onChangeText={username => setUsername(username)}/>
            <TextInput  style={{marginTop: '2%', backgroundColor: 'white', color: 'black', width: '50%'}} label='getEmail' value={email} onChangeText={email => setEmail(email)}/>
            <Button title='create'  color="#637ed0" onPress={onCreate} />  */}
          
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
    paddingTop: '2%',
    paddingBottom: '2%',
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

