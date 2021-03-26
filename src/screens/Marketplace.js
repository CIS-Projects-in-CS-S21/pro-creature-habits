import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image, Modal, Pressable} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {FILTER, FILTER_ALL} from "../redux/marketplaceInventory";
import DropDownPicker from "react-native-dropdown-picker";
import Cards from "../components/marketplaceComponents/Cards";
import {OFF} from "../redux/modalVisible";
import {ItemInventory} from "../components/ItemInventory";
import {BUY} from "../redux/coinBalance";

import { showMessage } from "react-native-flash-message";
import {ACH_PROGRESS} from "../redux/achievementsComplete";
import {PURCHASE_GRAY} from "../redux/marketplaceItemsBought";
import AnimatedNumbers from "react-native-animated-numbers";


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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 10,
		backgroundColor: '#402688',
		borderRadius: 10,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	button: {
		borderRadius: 7,
		width: 80,
		alignItems: 'center',
		padding: 10,
		elevation: 2,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	modalFooter: {
    	flexDirection: 'row',
		paddingTop: 15
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
	const selectedItem = useSelector(state=>state.selectedMarketItem);

	const changeFilter = (category) => {
		if(category === 'all') {
			dispatch({type: FILTER_ALL});
		} else {
			dispatch({type: FILTER, data: category});
		}
	}

	const upperCase = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	}

	const handlePurchase = (item) => {
		dispatch({type: PURCHASE_GRAY, data: item});
		dispatch({type: BUY, data: ItemInventory[item].cost});
		dispatch({type: OFF});
		dispatch({type: ACH_PROGRESS, data: 'buy_item'});
		if(ItemInventory[item].category === 'food') {
			dispatch({type: ACH_PROGRESS, data: 'buy_food'});
		} else if (ItemInventory[item].category === 'toys') {
			dispatch({type: ACH_PROGRESS, data: 'buy_toy'});
		} else {
			dispatch({type: ACH_PROGRESS, data: 'buy_clothes'})
		}

		showMessage({
			message: `${upperCase(ItemInventory[item].name)} has been added to your inventory`,
			type: "success",
			statusBarHeight: 52,
		})
	}

    return (
        <ScrollView style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.shopImage} source={require('../test_images/shop.png')}/>
				<View style={styles.balanceContainer}>
					<View style={styles.balanceText}>
						<AnimatedNumbers
							includeComma
							animateToNumber={useSelector(state=>state.coins)}
							fontStyle={{fontSize: 25, color: 'white'}}
						/>
					</View>
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
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={useSelector(state=>state.modalVisible)}
				>
					{ItemInventory[selectedItem].cost <= useSelector(state=>state.coins) ? (
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Image style={styles.itemImage} source={ItemInventory[selectedItem].uri}/>
								<Text style={{color: 'white', paddingTop: 10, paddingBottom: 10}}>{ItemInventory[selectedItem].buyText}</Text>
								<View style={styles.modalFooter}>
									<Pressable
										style={[styles.button, styles.buttonClose, {left: -30}]}
										onPress={() => dispatch({type: OFF})}
									>
										<Text style={styles.textStyle}>Cancel</Text>
									</Pressable>
									<Pressable
										style={[styles.button, styles.buttonClose, {right: -30}]}
										onPress={() => handlePurchase(selectedItem)}
									>
										<Text style={styles.textStyle}>Buy {ItemInventory[selectedItem].cost}</Text>
										<Image style={{width: 20, height: 20}} source={require('../test_images/coin.png')}/>
									</Pressable>
								</View>
							</View>
						</View>
							) : (
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={{color: 'white', paddingTop: 10, paddingBottom: 10, textAlign: 'center'}}>{'You do not have enough coins\n to buy this item'}</Text>
								<View style={styles.modalFooter}>
									<Pressable
										style={[styles.button, styles.buttonClose]}
										onPress={() => dispatch({type: OFF})}
									>
										<Text style={styles.textStyle}>Close</Text>
									</Pressable>
								</View>
							</View>
						</View>

					)}
				</Modal>
			</View>
			<Cards items={useSelector(state => state.shopItems)}/>
        </ScrollView>
    );
};

export default MarketplaceScreen;
