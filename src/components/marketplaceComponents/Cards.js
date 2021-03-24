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

	const onPress = (item) => {
		dispatch({type: ON});
		dispatch({type: SELECT, data: item});
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
