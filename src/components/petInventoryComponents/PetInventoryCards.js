import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TouchableHighlight, View, StyleSheet} from "react-native";
import Card from "../marketplaceComponents/Card";

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
	}
});

const PetInventoryCards = (items) => {
	const dispatch = useDispatch();

	/*const onPurchase = (item) => {
		if(ItemInventory[item].cost > balance) {
			alert(`You do not have enough money to buy ${item}`);
		} else {
			alert(`You have bought ${item}`);
			dispatch({type: PURCHASE, data: item})
			dispatch({type: BUY, data: ItemInventory[item].cost})
			dispatch({type: ADD, data: item})
		}
	}*/
	console.log(items)
	return (
		<View style={styles.cardsContainer}>
			{items.items.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.8}
						underlayColor='#000'
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

export default PetInventoryCards;