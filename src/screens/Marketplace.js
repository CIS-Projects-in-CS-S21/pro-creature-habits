import React from 'react';
import {Text, View, Button, StyleSheet, Image} from "react-native";
import {TouchableHighlight} from "react-native";
import { Images } from "../components/Images";


const styles = StyleSheet.create({
    container: {
    	flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white'

    },
	cardsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20,
		flexWrap: 'wrap',
		alignContent: 'flex-end'
	},
	cardContainer: {
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 20,
		padding: 8,
		backgroundColor: 'lightblue',
		margin: 10
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingLeft: 5,
		paddingRight: 5
	},
	coin: {
    	width: 25,
		height: 25,
		marginTop: 5
	}
});

const shopItems = ['pizza', 'shoes', 'burger', 'shirt', 'carrot', 'shirt', 'water']

const Card = ({item}) => {
	const itemDir = `../test_images/${item}.png`;
	return (
		<View style={styles.cardContainer}>
			<Image style={{width:75, height:75}} source={Images[item].uri}/>
			<View style={styles.cardFooter}>
				<Text style={{fontSize: 20, color: 'white', marginTop: 5}}>{Math.round(10*Math.random()) + 1}</Text>
				<Image style={styles.coin} source={require('../test_images/coin.png')}/>
			</View>
		</View>
	)
}

const Cards = () => {
	const[items, setItems] = React.useState(shopItems);

	const onPurchase = (item) => {
		alert(`You bought ${item}!`)
		const index = items.indexOf(item);
		const copyItems = [...items];
		copyItems.splice(index, 1);
		setItems(copyItems);
	}

	return (
		<View style={styles.cardsContainer}>
			{items.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.6}
						onPress={() => onPurchase(item)}
						style={{borderRadius: 20}}
						key={index}
					>
						<Card key={index} item={item} />
					</TouchableHighlight>
				)
			})}
		</View>
	)
}

const MarketplaceScreen = () => {
    return (
        <View style={styles.container}>
			<Cards/>
        </View>
    );
};

export default MarketplaceScreen;
