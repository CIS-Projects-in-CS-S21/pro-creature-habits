import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {ItemInventory} from "../ItemInventory";

const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 2,
		padding: 8,
		backgroundColor: 'rgba(49,69,194,0.7)',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11
	},
	circle: {
       width: 20,
       height: 20,
       borderRadius: 10,
       color: 'white',
       borderWidth: 1,
       borderColor: 'white',
       borderStyle: 'solid',
       textAlign: "center",
       fontWeight: 'bold'
    },
	itemImage: {
		width:75,
		height:75,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
	}
});

const PetCard = ({item}) => {
	return (
		<View style={styles.cardContainer}>
		    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
		     {(!item.wear) ? <Text style={styles.circle}> {item.bought} </Text> : <Text style={styles.circle}> √ </Text>}
		    </View>
			<Image style={styles.itemImage} source={item.uri}/>
		</View>
	)
}

export default PetCard;
