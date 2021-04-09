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
       backgroundColor: 'white',
       borderColor: '#000',
       borderWidth: 2,
       borderRadius: 5,
       margin: 5
     },
     mainContainer: {
            flexDirection: 'column',
     		padding: 10,
     		paddingBottom: 15,
     		flexGrow: 1
     	},
     	textTitle:{
     	    color:"white",
     	    textAlign:"center"
     	},
     container: {
     		flexDirection: 'row',
     		borderRadius: 10,
     		justifyContent: 'space-between',
     		borderColor: 'black',

     		shadowOffset: {width: 0, height: 5},
     		shadowOpacity: 0.8,
     		shadowRadius: 3,
     		elevation: 11,
     		marginBottom: 15,
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
              if ((new Date(currTime) - new Date(lastFedTime))/6000 >= 5) {
                  console.log("updating time "+currTime+" "+lastFedTime);
                  dispatch({type: TIME_FEED_CHANGE, data: realCurrTime});
                  dispatch({type: HUNGERBARDECREASE, data:2});
              }

	return (
		<View style={styles.mainContainer}>
      <Text style={styles.text}>Hunger Bar</Text>
			<View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hunger/10} width={100} height={10} color='#4ab125' borderColor='black' unfilledColor = 'red' />
			</View>
      <Text style={styles.text}>Fun Bar</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={fun/10} width={100} height={10} color='#4ab125' borderColor='black' unfilledColor = 'red' />
			</View>
      <Text style={styles.text}>Hygiene Bar</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hygiene/10} width={100} height={10} color='#4ab125' borderColor='black' unfilledColor = 'red' />
			</View>

		</View>
	)
}

export default HealthBar;
