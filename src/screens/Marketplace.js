import React from 'react';
import {View, ScrollView, StyleSheet, Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {FILTER, FILTER_ALL} from "../redux/marketplaceInventory";
import DropDownPicker from "react-native-dropdown-picker";
import Cards from "../components/marketplaceComponents/Cards";
import BuyModal from "../components/marketplaceComponents/BuyModal";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
	itemImage: {
		width:75,
		height:75,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		padding: 3
	},
	textStyle: {
    	color: 'white'
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
			<BuyModal/>
			<Cards items={useSelector(state => state.shopItems)}/>
        </ScrollView>
    );
};

export default MarketplaceScreen;
