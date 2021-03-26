import React from 'react';
import { View, Text,ScrollView, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {CHANGE} from "../redux/petInfo";
import DropDownPicker from "react-native-dropdown-picker";
import PetInventoryCards from "../components/petInventoryComponents/PetInventoryCards";
import {ADD,FILTER_PET, FILTER_ALL_PET} from "../redux/petInventory";
import HealthBar from "../components/HealthBar";

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
    }
);


const PetProfile = ({choices, navigation}) => {

const dispatch = useDispatch();
const petImgChoice = useSelector(state => state.petDetails[1]);

/*TODO create selected pet item*/
const selectedItem = useSelector(state=>state.selectedMarketItem);

const findImage = () => {
console.log(petImgChoice);
    	if (petImgChoice == "cat") {
    	    return require('../images/cat.png');
    	} else {
    	    return require('../images/dog.png');
    	}
    }


    	const changeFilter = (category) => {
    		if(category === 'all') {
    			dispatch({type: FILTER_ALL_PET});
    		} else {
    			dispatch({type: FILTER_PET, data: category});
    		}
    	}

	return (
<ScrollView style={styles.container}>
			<Text style={styles.text}>Pet Profile Screen</Text>
			<Text style={styles.text}>
			{useSelector(state => state.petDetails[0])}
			</Text>
			<View style={styles.imageContainer}>
            <Image id="img"
                style={{width: 150,height: 150,borderWidth: 5,borderRadius: 10}}
                source={(petImgChoice == "cat") ? require('../images/cat.png') : require('../images/dog.png')}
            />
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
            	//TODO create new modalVisible state for pet inventory
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
			<PetInventoryCards items={useSelector(state => state.petInv)}/>
        </ScrollView>


	);
};

export default PetProfile;
