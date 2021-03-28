import React from 'react';
import { View, Text,ScrollView, StyleSheet, Image, Modal, Pressable } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {CHANGE} from "../redux/petInfo";
import DropDownPicker from "react-native-dropdown-picker";
import PetInventoryCards from "../components/petInventoryComponents/PetInventoryCards";
import PetImage from "../components/petInventoryComponents/PetImage";
import {ADD,FILTER_PET, FILTER_ALL_PET,SELECTED} from "../redux/petInventory";
import HealthBar from "../components/HealthBar";
import {OFF_PET} from "../redux/petModalVisible";
import {ItemInventory} from "../components/ItemInventory";
import { showMessage } from "react-native-flash-message";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
    },
    text2: {
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },
    image: {
        width: 100,
        height: 100,
        borderWidth: 2,
        		borderColor: "white",
        		borderRadius: 20,
        		padding: 8,
        		backgroundColor: "lightblue",
        		margin: 10
    },
    imageContainer: {
            flexDirection: 'row',
    		justifyContent: 'space-evenly',
    		marginTop: 20,
    		flexWrap: 'wrap',
    		alignContent: 'flex-end'
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
    	healthbarContainer: {
    	    flexDirection:'column'

    	},
    	dropdownContainer: {
    		height: 40,
    		alignSelf: 'stretch',
    		marginLeft: 20,
    		marginRight:20,
    		marginTop: 20
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
            	centeredView: {
                		flex: 1,
                		justifyContent: "center",
                		alignItems: "center",
                		marginTop: 22
                	},
    }
);


const PetProfile = ({choices, navigation}) => {

const dispatch = useDispatch();
const petImgChoice = useSelector(state => state.petDetails[1]);

/*TODO create selected pet item*/
const selectedItem = useSelector(state=>state.selectedPetItem);

const findImage = () => {
console.log(petImgChoice);
    	if (petImgChoice == "cat") {
    	    return require('../images/cat.png');
    	} else {
    	    return require('../images/dog.png');
    	}
    }


    	const changeFilter = (category) => {
    	console.log("CHANGE FILTER")
    		if(category === 'all') {
    			dispatch({type: FILTER_ALL_PET});
    		} else {
    			dispatch({type: FILTER_PET, data: category});
    		}
    	}

    	const upperCase = (string) => {
        		return string[0].toUpperCase() + string.slice(1);
        	}

    	const handlePurchase = (item) => {
        		dispatch({type: OFF_PET});
        		if(ItemInventory[item].category === 'food') {
        			dispatch({type: SELECTED, data: 'select_food',thing: item});
        		} else if (ItemInventory[item].category === 'toys') {
        			dispatch({type: SELECTED, data: 'select_toy',thing: item});
        		} else {
        			dispatch({type: SELECTED, data: 'select_clothes',thing: item})
        		}

        		showMessage({
        			message: `${upperCase(ItemInventory[item].name)} has been used`,
        			type: "success",
        			statusBarHeight: 52,
        		})
        	}

	return (
<ScrollView style={styles.container}>
			<Text style={styles.text}>Pet Profile Screen</Text>
			<Text style={styles.text}>
			{useSelector(state => state.petDetails[0])}
			</Text>
			<View style={styles.imageContainer}>
            {/*<Image id="img"
                style={{width: 150,height: 150,borderWidth: 5,borderRadius: 10}}
                source={(petImgChoice == "cat") ? require('../images/cat.png') : require('../images/dog.png')}
            />*/}
            <PetImage items={useSelector(state => state.petInv)}/>
            <View style={styles.healthbarContainer}>
                <HealthBar/>
                <HealthBar/>
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
			<Modal
            	animationType="slide"
            	transparent={true}
            	visible={useSelector(state=>state.petMV)}
            >
            {/*If food, Would you like to feed this item to your pet? Yes or No
            If clothing, would you like your pet to wear this item? Yes or no*/}
            		<View style={styles.centeredView}>
            		    <View style={styles.modalView}>
            			<Image style={styles.itemImage} source={ItemInventory[selectedItem].uri}/>
            			<Text style={{color: 'white', paddingTop: 10, paddingBottom: 10}}>{ItemInventory[selectedItem].inventoryText}</Text>
            			<View style={styles.modalFooter}>
            			<Pressable
            			   style={[styles.button, styles.buttonClose, {left: -30}]}
            			      onPress={() => dispatch({type: OFF_PET})}
            			>
            										<Text style={styles.textStyle}>Cancel</Text>
            									</Pressable>
            									<Pressable
            										style={[styles.button, styles.buttonClose, {right: -30}]}
            										onPress={() => handlePurchase(selectedItem)}
            									>
            										<Text style={styles.textStyle}>Yes </Text>
            									</Pressable>
            								</View>
            							</View>
            						</View>
            				</Modal>
			<PetInventoryCards items={useSelector(state => state.petInv)}/>
        </ScrollView>


	);
};

export default PetProfile;
