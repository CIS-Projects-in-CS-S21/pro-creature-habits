import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {FILTER, FILTER_ALL} from "../redux/marketplaceInventory";
import DropDownPicker from "react-native-dropdown-picker";
import Cards from "../components/marketplaceComponents/Cards";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#406BE9',
    },
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	shopImage: {
		height: 100,
		width: 100,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3
	},
	balanceContainer: {
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
	},
	balanceText: {
		color: 'white',
		fontSize: 25,
		marginTop: 5,
		marginLeft: 5,
		marginBottom: 5
	},
	coinImage: {
    	height: 30,
		width: 30,
		marginTop: 5,
		marginRight: 5,
		marginBottom: 5
    },
	dropdownContainer: {
		height: 40,
		alignSelf: 'stretch',
		marginLeft: 20,
		marginRight:20,
		marginTop: 20
	},
});

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
			<View style={styles.header}>
				<Image style={styles.shopImage} source={require('../test_images/shop.png')}/>
				<View style={styles.balanceContainer}>
					<Text style={styles.balanceText}>
						{useSelector(state => state.coins)}
					</Text>
					<Image
						style={styles.coinImage}
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
				containerStyle={styles.dropdownContainer}
				onChangeItem={item => changeFilter(item.value)}
			/>
			<Cards items={useSelector(state => state.shopItems)}/>
        </ScrollView>
    );
};

export default MarketplaceScreen;
