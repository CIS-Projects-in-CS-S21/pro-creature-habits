import React from 'react';
import {Text, View, Button, StyleSheet, Image} from "react-native";
import {TouchableHighlight} from "react-native";
import { Images } from "../components/Images";
import { useSelector, useDispatch } from "react-redux";
import { BUY } from '../redux/coinBalance'
import {PURCHASE} from "../redux/marketplaceInventory";


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

const Card = ({item}) => {
	return (
		<View style={styles.cardContainer}>
			<Image style={{width:75, height:75}} source={Images[item].uri}/>
			<View style={styles.cardFooter}>
				<Text style={{fontSize: 20, color: 'white', marginTop: 5}}>{Images[item].cost}</Text>
				<Image style={styles.coin} source={require('../test_images/coin.png')}/>
			</View>
		</View>
	)
}

const Cards = () => {
	const dispatch = useDispatch();
	const balance = useSelector(state => state.coins);
	const items = useSelector(state => state.shopItems);

	const onPurchase = (item) => {
		alert(`You bought ${item}!`)
		dispatch({ type: PURCHASE, data: item })
		dispatch({ type: BUY, data: Images[item].cost })
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
