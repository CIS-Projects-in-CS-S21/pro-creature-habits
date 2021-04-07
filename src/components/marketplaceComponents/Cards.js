import React from "react";
import {useDispatch} from "react-redux";
import {TouchableHighlight, View, StyleSheet} from "react-native";
import Card from "./Card";
import {ON} from "../../redux/modalVisible";
import {SELECT} from "../../redux/selectedMarketItem";

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
	cardsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		flexWrap: 'wrap',
	},
	highlightContainer: {
		margin: 10,
		borderRadius: 5
	},
});

const Cards = (items) => {
    console.log("HELLO "+items.items);
	const dispatch = useDispatch();

	const onPress = (item) => {
    		dispatch({type: ON});
    		dispatch({type: SELECT, data: item})
		}

	return (
		<View style={styles.cardsContainer}>
			{items.items.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.8}
						underlayColor='#000'
						onPress={() => onPress(item)}
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
