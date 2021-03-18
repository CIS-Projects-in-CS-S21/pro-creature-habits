import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ItemInventory} from "../ItemInventory";
import {PURCHASE} from "../../redux/marketplaceInventory";
import {BUY} from "../../redux/coinBalance";
import {TouchableHighlight, View, StyleSheet, Alert, Modal, Pressable, Button} from "react-native";
import Card from "./Card";
import {Text} from "react-native-web";
import {ON} from "../../redux/modalVisible";

const styles = StyleSheet.create({
	text: {
		color: 'white'

	},
	cardsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 10,
		flexWrap: 'wrap',
		alignContent: 'flex-end'
	},
	highlightContainer: {
		alignSelf: 'flex-end',
		margin: 10
	},
});

const Cards = (items) => {
	const dispatch = useDispatch();
	const balance = useSelector(state => state.coins);

	const onPurchase = (item) => {
		if(ItemInventory[item].cost > balance) {
			Alert.alert(
				item,
				`You do not have enough money to buy ${item}`,
				[
					{
						text: "cancel",
						style: "cancel",
					},
				],
				{
					cancelable: true,
				},
			);
		} else {
			Alert.alert(
				item,
				`You have bought ${item}`,
				[
					{
						text: "cancel",
						style: "cancel",
					},
					{
						text: 'buy',
						onPress: () => {
							dispatch({type: PURCHASE, data: item})
							dispatch({type: BUY, data: ItemInventory[item].cost})
						}
					}
				],
				{cancelable: false}
			);

		}
	}
	return (
		<View style={styles.cardsContainer}>
			{items.items.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.8}
						underlayColor='#000'
						onPress={() => dispatch({type: ON})}
						key={index}
						style={styles.highlightContainer}
					>
						<Card key={index} item={item} />
					</TouchableHighlight>
				)
			})}
		</View>
	)
}

export default Cards;
