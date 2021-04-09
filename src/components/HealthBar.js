import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";
import { useSelector, useDispatch } from "react-redux";
import { HUNGERBARDECREASE,HUNGERBARINCREASE } from '../redux/hungerbarPoint';
import {FUNBARINCREASE, FUNBARDECREASE} from '../redux/funbarPoint'
import {HYGIENEBARINCREASE, HYGIENEBARDECREASE} from '../redux/hygienebarPoint'
import {TIME_FEED_CHANGE} from "../redux/timeOfBars";


const styles = StyleSheet.create({
    progressBar: {
       height: 20,
       width: 100,
       borderColor: 'white',
       borderWidth: 2,
       borderRadius: 5,
       margin: 5
     },
     mainContainer: {
            flexDirection: 'column',
     		padding: 10,
     		paddingBottom: 5,
     		flexGrow: 1
     	},
     	textTitle:{
     	    color:"white",
     	    textAlign:"center",
     	    fontSize:13
     	},
     container: {
     		flexDirection: 'row',
     		borderRadius: 10,
     		justifyContent: 'space-between',
     		borderColor: 'black',
     		shadowOffset: {width: 0, height: 1},
     		shadowOpacity: 0.8,
     		shadowRadius: 3,
     		elevation: 11,
     		marginBottom: 10,
     },
});




const HealthBar = ({bar,progress}) => {
  const hunger = useSelector(state=>state.hunger);
  const fun = useSelector(state=>state.fun);
  const hygiene = useSelector(state=>state.hygiene);
  const dispatch = useDispatch();
  const array = useSelector(state=>state.currentTimeArray);
  			const currTime = array[0];
  			const lastFedTime = array[1];
  			const realCurrTime = new Date();
  			console.log("current time2 "+new Date(currTime)+" "+lastFedTime);
              if ((new Date(currTime) - new Date(lastFedTime))/60000 >= 5) {
                  console.log("updating time "+currTime+" "+lastFedTime);
                  dispatch({type: TIME_FEED_CHANGE, data: realCurrTime});
                  dispatch({type: HUNGERBARDECREASE, data:2});
              }

	return (
		<View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Hunger Bar</Text>
			<View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hunger/10} width={100} height={10}
					color={(hunger/10 > .7) ? '#4ab125' : 	(hunger/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white'/>
			</View>
      <Text style={styles.textTitle}>Fun Bar</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={fun/10} width={100} height={10}
					color={(fun/10 > .7) ? '#4ab125' : 	(fun/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white' />
			</View>
      <Text style={styles.textTitle}>Hygiene Bar</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hygiene/10} width={100} height={10}
					color={(hygiene/10 > .7) ? '#4ab125' : 	(hygiene/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white'/>
			</View>

		</View>
	)
}

export default HealthBar;
