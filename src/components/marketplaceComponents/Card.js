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
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingLeft: 5,
		paddingRight: 5,
		marginTop: 5,
		borderTopWidth: 1,
		borderTopColor: 'white'
	},
	cardFooterText: {
		fontSize: 20,
		color: 'white',
		marginTop: 5
	},
	coin: {
		width: 25,
		height: 25,
		marginTop: 5
	},
	itemImage: {
		width:75,
		height:75,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
	}
});

const Card = ({item}) => {
	return (
		<View style={styles.cardContainer}>
			<Image style={styles.itemImage} source={ItemInventory[item].uri}/>
			<View style={styles.cardFooter}>
				<Text style={styles.cardFooterText}>{ItemInventory[item].cost}</Text>
				<Image style={styles.coin} source={require('../../test_images/coin.png')}/>
			</View>
		</View>
	)
}

export default Card;