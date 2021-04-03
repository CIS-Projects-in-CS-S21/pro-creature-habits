import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";
import {useSelector} from "react-redux";

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
     fill: {
       position: 'absolute',
       backgroundColor: 'green',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0
     },
     container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: 'black',
      shadowOffset: {width: 0, height:5}
     },
     mainContainer: {
      flexDirection:'column',
      justifyContent: 'space-between',
      paddingBottom: 20,
      flexGrow:1,
     },
     text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
  },
   

});

const HealthBar = ({bar,progress}) => {
  const hunger = useSelector(state=>state.hunger);
  const fun = useSelector(state=>state.fun);
  const hygiene = useSelector(state=>state.hygiene);
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