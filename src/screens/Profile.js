import React from 'react';
import { View, Text,ScrollView, StyleSheet, Image, Modal, Pressable, TouchableOpacity, TextInput, ActionSheetIOS} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {CHANGENAME} from "../redux/petInfo";
import DropDownPicker from "react-native-dropdown-picker";
import PetInventoryCards from "../components/petInventoryComponents/PetInventoryCards";
import PetImage from "../components/petInventoryComponents/PetImage";
import PetInventoryFilter from "../components/filterComponents/PetInventoryFilter";
import {FILTER_PET, FILTER_ALL_PET,SELECTED} from "../redux/petInventory";
import HealthBar from "../components/HealthBar";
import {OFF_PET} from "../redux/petModalVisible";
import {ItemInventory} from "../components/ItemInventory";
import { showMessage } from "react-native-flash-message";
import { Audio } from 'expo-av';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {ON_PET} from "../redux/petModalVisible";
import {INCREMENT_STAT} from "../redux/statTracker";
import * as Progress from "react-native-progress";
import {playSound, soundEffectList} from "../components/audio.js";

import { HUNGERBARDECREASE,HUNGERBARINCREASE } from '../redux/hungerbarPoint';
import {FUNBARINCREASE, FUNBARDECREASE} from '../redux/funbarPoint'
import {HYGIENEBARINCREASE, HYGIENEBARDECREASE} from '../redux/hygienebarPoint'
import {INCREASE_HEALTH, DECREASE_HEALTH} from '../redux/healthBarPoint'
import {TIME_FEED_CHANGE,TIME_TOY_CHANGE,TIME_BATH_CHANGE} from "../redux/timeOfBars";
import { StatsData } from '../components/StatsData';
import Notifications from "../../src/Notifications";



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
        paddingRight: 5,
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
    		justifyContent: 'space-around',
    		marginTop: 20,
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
				backgroundColor: '#341f6f',
        		borderRadius: 10,
        		padding: 20,
        		alignItems: "center",
        		shadowColor: "#000",
        		shadowOffset: {
        			width: 0,
        			height: 2
        		},
        		shadowOpacity: 0.25,
        		shadowRadius: 4,
        		elevation: 5,
				borderWidth: 1,
				borderColor: '#7276e3'
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
                	color: 'white',
            	},
            	centeredView: {
                		flex: 1,
                		justifyContent: "center",
                		alignItems: "center",
                		marginTop: 22
                	},
                	centeredView2: {
                	flexDirection:'row',
                                    		justifyContent: "center",
                                    		alignItems: "center",
                                    		marginTop: 22,
						paddingBottom: 22
                                    	},

    }
);




const PetProfile = () => {



    const dispatch = useDispatch();

    /*TODO create selected pet item*/
    const selectedItem = useSelector(state=>state.selectedPetItem);
    const [textName, onChangeText] = React.useState('');


	const upperCase = (string) => {
			return string[0].toUpperCase() + string.slice(1);
		}

	const weather = useSelector(state=>state.weatherStatus);
	const temperature = useSelector(state=>state.temperature);

    const handleSelection = (item) => {
        dispatch({type: OFF_PET});
        const currentTime = new Date();
        if(ItemInventory[item].category === 'food') {
			dispatch({type: SELECTED, data: 'select_food',thing: item});
			dispatch({type: INCREMENT_STAT, data: 'pet_fed'})
			dispatch({type: TIME_FEED_CHANGE, data: currentTime});
			dispatch({type: HUNGERBARINCREASE, data:2});
			playSound(soundEffectList.food_sound);
        } else if (ItemInventory[item].category === 'toys') {
      	    dispatch({type: SELECTED, data: 'select_toys',thing: item});
      	    dispatch({type: TIME_TOY_CHANGE, data: currentTime});
			dispatch({type: FUNBARINCREASE, data:3});

        } else if (ItemInventory[item].category === 'grooming') {
            console.log("grooming")
            dispatch({type: SELECTED, data: 'select_grooming',thing: item});
            dispatch({type: INCREMENT_STAT, data: 'pet_wash'})
            dispatch({type: TIME_BATH_CHANGE, data: currentTime});
            dispatch({type: HYGIENEBARINCREASE, data:3});

        } else {
      		dispatch({type: SELECTED, data: 'select_clothes',thing: item})
      		dispatch({type: INCREMENT_STAT, data: 'clothes_changed'});
            playSound(soundEffectList.clothes_sound);
            let clothtype = ItemInventory[item].weather;
            if (item.includes('shirt') || item.includes('tank') || item.includes('coat')) {
                if (temperature == "Cold") {
                    if (clothtype == "cold") {
                        dispatch({type: INCREASE_HEALTH,data:10})
                    } else {
                        dispatch({type: DECREASE_HEALTH,data:5})
                    }
                } else if (temperature == "Hot") {
                    if (clothtype == "hot") {
                        dispatch({type: INCREASE_HEALTH,data:10})
                    } else {
                        dispatch({type: DECREASE_HEALTH,data:5})
                    }
                } else {
                    if (clothtype == "mild") {
                        dispatch({type: INCREASE_HEALTH,data:10})
                    } else {
                        dispatch({type: DECREASE_HEALTH,data:5})
                    }
                }

            }

        }

        showMessage({
      		message: `${upperCase(ItemInventory[item].name)} has been used`,
        	type: "success",
        	statusBarHeight: 52,
            })
		}


        const editPet = (name) => {
            dispatch({type: CHANGENAME, changes: name});
            dispatch({type:"OFF_PET"});
		}

        /* const [sound, setSound] = React.useState();
            async function playSound() {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                 require('../components/ra.wav')
             );
             setSound(sound);
              console.log('Playing Sound');
                            await sound.playAsync(); }
                          React.useEffect(() => {
                            return sound
                              ? () => {
                                  console.log('Unloading Sound');
                                  sound.unloadAsync(); }
                              : undefined;
                          }, [sound]);
*/
              const onUpdate = () =>{
                    dispatch({type: ON_PET,data:"edit"});
               }
	return (
        <View style = {styles.container}>
            <View style = {styles.centeredView2}>
				<View style={styles.imageContainer}>
					<View style={{flexDirection: 'column', alignItems: 'center', paddingRight: 40}}>
						<PetImage/>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Text style={styles.text}>
								{useSelector(state => state.petDetails.name)}
							</Text>
							<TouchableOpacity onPress={onUpdate}>
								<MaterialCommunityIcons
									name = "pencil"
									size = {20}
									style={{color:"white"}}/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.healthbarContainer}>
						<HealthBar/>
					</View>
				</View>
			</View>
			<PetInventoryFilter/>
			<Modal
            	animationType="slide"
            	transparent={true}
            	visible={(useSelector(state=>state.petMV) !== "off")}
            >
            {(useSelector(state=>state.petMV) === "press") ?
            		<View style={styles.centeredView}>
            		    <View style={styles.modalView}>
						<View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '75%', alignItems: 'center'}}>
							<Image style={styles.itemImage} source={ItemInventory[selectedItem].uri}/>
							<View style={{alignItems: 'center', paddingBottom: 20}}>
								<Text style={{color: 'white', marginTop: 10, fontSize: 20, marginBottom: 5, fontWeight: 'bold', alignSelf: 'flex-start'}}>
									{Object.keys(ItemInventory[selectedItem].benefits)}
								</Text>
								<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
									<Progress.Bar
										progress={ItemInventory[selectedItem].benefits[Object.keys(ItemInventory[selectedItem].benefits)]}
										width={60}
										height={8}
										color='lightgreen'
										borderColor='white'
										borderWidth={0.8}
										style={{marginRight: 5}}
									/>
									<Ionicons name='arrow-up-circle-outline' color='white' size={18}/>
								</View>
							</View>
						</View>
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
            							onPress={() => handleSelection(selectedItem)}
            							>
            							<Text style={styles.textStyle}>Yes </Text>
            						</Pressable>
            					</View>
            				</View>
            			</View>
            			:
            			<View style={styles.centeredView}>
                             <View style={styles.modalView}>
                                     <Text style={styles.text}>Please enter a name for your pet</Text>
                                                 <View style={styles.imageContainer}>
                                                 <TextInput
                                                                 style={{
                                                                     width:"85%",
                                                                     backgroundColor: "white",
                                                                     marginBottom: 10,
                                                                     padding: 15,
                                                                 }}
                                                                 placeholder="Your Pet's Name"
                                                             onChangeText={textName => onChangeText(textName)}
                                                             value={textName}
                                                 />
                                             </View>
                                    	 <View style={styles.modalFooter}>
                                    	 <Pressable
                                    	     style={[styles.button, styles.buttonClose, {left: -30}]}
                                    			 onPress={() => dispatch({type: OFF_PET})}
                                    			>
                                    				<Text style={styles.textStyle}>Cancel</Text>
                                    					</Pressable>
                                    					    <Pressable
                                    							style={[styles.button, styles.buttonClose, {right: -30}]}
                                    							onPress={() => editPet(textName)}
                                    							>
                                    							<Text style={styles.textStyle}>Finish </Text>
                                    						</Pressable>
                                    					</View>
                                    				</View>
                                    			</View>
            						}
            				</Modal>
            				<ScrollView style={styles.container}>
			<PetInventoryCards items={useSelector(state => state.petInv)}/>
            </ScrollView>
            </View>
	);
};

export default PetProfile;
