import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ItemInventory} from "../ItemInventory";

const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 3,
		borderColor: 'lightgrey',
		padding: 10,
		backgroundColor: 'rgba(49,69,194,0.7)',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11,
		borderRadius: 5
	},
	circle: {
        width: 25,
        height: 25,
        borderRadius: 20,
        color: 'white',
        borderColor: 'white',
        borderStyle: 'solid',
        fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: "row",
		position: 'absolute',
		right: -13.5,
		top: -13.5,
		backgroundColor: 'white'
    },
	itemImage: {
		width:70,
		height:70,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
	}
});

const PetCard = ({item}) => {
	return (
	<View>
		{(!item.wear || item.category === 'food') ? (
			<View style={styles.cardContainer}>
				{item.category === 'food' &&
					<View style={styles.circle}>
						<Text style={{color: '#402688', fontSize: 12}}> {item.bought} </Text>
					</View>
				}
				<Image style={styles.itemImage} source={item.uri}/>
			</View>
			): (
		<View style={styles.cardContainer}>
			<View style={styles.circle}>
				<Ionicons name="shirt" color='#402688' size={16}/>
			</View>
			<Image style={styles.itemImage} source={item.uri}/>
		</View>
		)
		}
	</View>
	)
}

export default PetCard;
