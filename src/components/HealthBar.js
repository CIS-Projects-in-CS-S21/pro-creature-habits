import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";


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
     }
});

const HealthBar = ({bar,progress}) => {
	return (
		<View style={styles.progressBar}>
			<View style={styles.fill}>
			</View>
		</View>
	)
}

export default HealthBar;