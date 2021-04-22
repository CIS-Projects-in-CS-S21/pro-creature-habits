import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";
import { useSelector, useDispatch } from "react-redux";
import { HUNGERBARDECREASE,HUNGERBARINCREASE } from '../redux/hungerbarPoint';
import {FUNBARINCREASE, FUNBARDECREASE} from '../redux/funbarPoint'
import {HYGIENEBARINCREASE, HYGIENEBARDECREASE} from '../redux/hygienebarPoint'
import {TIME_FEED_CHANGE,TIME_BATH_CHANGE,TIME_TOY_CHANGE} from "../redux/timeOfBars";



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
  console.log("hygiene "+hygiene);
  const dispatch = useDispatch();
  const array = useSelector(state=>state.currentTimeArray);
  const currTime = array[0];
  const lastFedTime = array[1];
  console.log("current time "+currTime)
  console.log("FOOOOD "+array[1])
  const lastToyTime = array[2];
  const lastBathTime = array[3];
  const realCurrTime = new Date();
  let timeDifFed = (realCurrTime - lastFedTime)/3600000
  let timeDifBath = (realCurrTime - lastBathTime)/3600000
  let timeDifToy = (realCurrTime - lastToyTime)/3600000
  console.log("lastbath "+timeDifBath)
  console.log("lasttoy "+timeDifToy)
  console.log("lastfed "+timeDifFed)

    console.log("TESTING HOW DATE WORDS "+(realCurrTime.getTime() + 5)+" ---- " +new Date(realCurrTime.getTime() + 2*3600000) + " " + 2)


  if (timeDifBath >= 24) {
    let twefourMult = Math.floor(timeDifBath/24);
    dispatch({type: HYGIENEBARDECREASE, data: twefourMult});
    dispatch({type: TIME_BATH_CHANGE, data: new Date(realCurrTime.getTime() + twefourMult*3600000)});
    console.log("BATH "+new Date(realCurrTime.getTime() + twefourMult*3600000) + " " + twefourMult)
  } if (timeDifToy >= 12) {
    let twelveMult = Math.floor(timeDifToy/12);
    dispatch({type: FUNBARDECREASE, data:twelveMult});
    dispatch({type: TIME_TOY_CHANGE, data: new Date(realCurrTime.getTime() + twelveMult*3600000)});
    console.log("TOY "+new Date(realCurrTime.getTime() + twelveMult*3600000) + " " + twelveMult)
  } if (timeDifFed >= 6) {
    let sixMult = Math.floor(timeDifFed/6);
    dispatch({type: HUNGERBARDECREASE, data:sixMult});
    dispatch({type: TIME_FEED_CHANGE, data: new Date(realCurrTime.getTime() + sixMult*3600000)});
    console.log("FED "+new Date(realCurrTime.getTime() + sixMult*3600000) + " " + sixMult)
  }



	return (
		<View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Hunger</Text>
			<View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hunger/10} width={100} height={10}
					color={(hunger/10 > .7) ? '#4ab125' : 	(hunger/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white'/>
			</View>
      <Text style={styles.textTitle}>Fun</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={fun/10} width={100} height={10}
					color={(fun/10 > .7) ? '#4ab125' : 	(fun/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white' />
			</View>
      <Text style={styles.textTitle}>Hygiene</Text>
      <View style={styles.container}>
					<Progress.Bar style={{margin: 10}} progress={hygiene/10} width={100} height={10}
					color={(hygiene/10 > .7) ? '#4ab125' : 	(hygiene/10 > .4) ? "#FFFF00" : "red"}
					borderColor='white'/>
			</View>

		</View>
	)
}

export default HealthBar;
