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


	return (
        <View style={styles.mainContainer}>
            <Text style={styles.textTitle}> Hunger Bar </Text>
	        <View style={styles.container}>
                <Progress.Bar style={{margin: 10}} progress={hunger/10} width={100} height={10} color='#4ab125' borderColor='black' unfilledColor="red"  />
			</View>
	    </View>
	)
}

export default HealthBar;