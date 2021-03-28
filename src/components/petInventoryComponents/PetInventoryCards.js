import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TouchableHighlight, View, StyleSheet} from "react-native";
import PetCard from "./PetCard";
import {ON_PET} from "../../redux/petModalVisible";
import {SELECT_PET} from "../../redux/selectedPetItem";

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
	let names = [];
for (const [key, value] of Object.entries(items.items)) {
  if (items.items[key].show) {
    names.push(key);
  }
}

	const onPress = (item) => {
	    console.log("PRESSED ITEM "+item)
        dispatch({type: ON_PET});
        dispatch({type: SELECT_PET, data: item})
    }


	return (
		<View style={styles.cardsContainer}>
			{names.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.8}
						underlayColor='#000'
						onPress={() => onPress(item)}
						key={index}
						style={styles.highlightContainer}
					>
						<PetCard key={index} item={items.items[item]} />
					</TouchableHighlight>
				)
			})}
		</View>
	)
}

export default PetInventoryCards;