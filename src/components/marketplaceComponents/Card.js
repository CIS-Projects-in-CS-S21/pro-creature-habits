import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {ItemInventory} from "../ItemInventory";
import {useSelector} from "react-redux";
import {Ionicons} from "@expo/vector-icons";

const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 3,
		borderColor: 'white',
		padding: 12,
		backgroundColor: 'rgba(49,69,194,0.7)',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11,
		borderRadius: 5
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingLeft: 5,
		paddingRight: 5,
		marginTop: 5,
		borderTopWidth: 2,
		borderTopColor: 'darkgrey'
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
	const itemsBought = useSelector(state=>state.itemsBought);

	return (
		<View>
			{!itemsBought.includes(item) ? (
				<View style={styles.cardContainer}>
					<Image style={styles.itemImage} source={ItemInventory[item].uri}/>
					<View style={styles.cardFooter}>
						<Text style={styles.cardFooterText}>{ItemInventory[item].cost}</Text>
						<Image style={styles.coin} source={require('../../test_images/coin.png')}/>
					</View>
				</View>
			) : (
				<View style={[styles.cardContainer, {backgroundColor: '#2a2a2a'}]}>
					<Image style={styles.itemImage} source={ItemInventory[item].uri}/>
					<View style={styles.cardFooter}>
						<Ionicons name="checkmark" color="white" size={28}/>
					</View>
				</View>
			)}
		</View>
	)
}

export default Card;
