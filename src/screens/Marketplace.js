import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import {TouchableHighlight} from "react-native";
import { Images } from "../components/Images";
import { useSelector, useDispatch } from "react-redux";
import { BUY } from '../redux/coinBalance'
import {FILTER, FILTER_ALL, PURCHASE} from "../redux/marketplaceInventory";
import DropDownPicker from "react-native-dropdown-picker";
import {TouchableOpacity} from "react-native-web";

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
		marginTop: 10,
		flexWrap: 'wrap',
		alignContent: 'flex-end'
	},
	cardContainer: {
    	borderWidth: 3,
		padding: 8,
		backgroundColor: 'rgba(62,78,203,0.7)',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11
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

const Cards = (items) => {
	const dispatch = useDispatch();
	const balance = useSelector(state => state.coins);


	const onPurchase = (item) => {
		if(Images[item].cost > balance) {
			alert(`You do not have enough money to buy ${item}`);
		} else {
			alert(`You have bought ${item}`);
			dispatch({type: PURCHASE, data: item})
			dispatch({type: BUY, data: Images[item].cost})
		}
	}
	return (
		<View style={styles.cardsContainer}>
			{items.items.map((item, index) => {
				return(
					<TouchableHighlight
						activeOpacity={0.8}
						underlayColor='#ffffff'
						onPress={() => onPurchase(item)}
						key={index}
						style={{alignSelf: 'flex-end', margin: 10}}
					>
						<Card key={index} item={item} />
					</TouchableHighlight>
				)
			})}
		</View>
	)
}

const MarketplaceScreen = () => {
	const dispatch = useDispatch();

	const changeFilter = (category) => {
		if(category === 'all') {
			dispatch({type: FILTER_ALL});
		} else {
			dispatch({type: FILTER, data: category});
		}
	}

    return (
        <ScrollView style={styles.container}>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

				<Image style={{height: 100, width: 100}} source={require('../test_images/shop.png')}/>
				<View
					style={{
						flexDirection: 'row',
						borderWidth: 2,
						borderRadius: 10,
						borderColor: 'white',
						backgroundColor: 'lightblue',
						marginLeft: 10,
						shadowOffset: {width: 0, height: 5},
						shadowOpacity: 0.8,
						shadowRadius: 3,
						elevation: 11
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 25,
							marginTop: 5,
							marginLeft: 5,
							marginBottom: 5
						}}>
						{useSelector(state => state.coins)}
					</Text>
					<Image
						style={{height: 30, width: 30, marginTop: 5, marginRight: 5, marginBottom: 5}}
						source={require('../test_images/coin.png')}
					/>
				</View>
			</View>
			<DropDownPicker
				items={[
					{label: 'All', value: 'all'},
					{label: 'Clothes', value: 'clothes'},
					{label: 'Food', value: 'food'},
					{label: 'Toys', value: 'toys'}
				]}
				defaultValue={'all'}
				containerStyle={{height: 40, alignSelf: 'stretch', marginLeft: 20, marginRight:20, marginTop: 20}}
				onChangeItem={item => changeFilter(item.value)}
			/>
			<Cards items={useSelector(state => state.shopItems)}/>
        </ScrollView>
    );
};


export default MarketplaceScreen;
