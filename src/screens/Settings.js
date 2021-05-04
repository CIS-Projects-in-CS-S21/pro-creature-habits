import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {ACH_ON} from "../redux/achievementsVisible";
import {STAT_ON} from "../redux/statsVisible";
import AchievementsScreen from "./Achievements";
import StatsScreen from "./UserStats";
import DifficultyOptions from "../components/DifficultyOptions";
import {SIGN_OUT} from "../redux/authenticated";
import {SET_COLD, SET_HOT, SET_MILD} from "../redux/temperature";
import {SET_WEATHER} from "../redux/weatherStatus";
import {SET_IMG} from "../redux/weatherImg";
import {INCREASE_HEALTH, DECREASE_HEALTH} from '../redux/healthBarPoint'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		backgroundColor: '#406BE9',

	},
	text: {
		color: 'white',
		fontSize: 20
	},
	buttonsContainer: {
		marginRight: 10,
		marginLeft: 10,
		backgroundColor: 'white',
		borderRadius: 5.4,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#402688',
		padding: 15,
		borderBottomWidth: 1,
		borderColor: 'white'
	},
	titleText: {
		color: 'white',
		fontSize: 30,
		padding: 20,
		textAlign: 'center'
	},
	dropdownContainer: {
		width: 50
	}
});



const SettingsScreen = () => {
	const dispatch = useDispatch();
	const temp = useSelector(state=>state.temperature);
	const weather = useSelector(state=>state.weatherStatus);
    const currentInventory = useSelector(state=>state.petInv)
    let currentShirtType = "";
    for (const [key] of Object.entries(currentInventory)) {
        if (key.includes('shirt') || key.includes('tank') || key.includes('coat')) {
            if (currentInventory[key].wear) {
                currentShirtType = currentInventory[key].weather;
            }
        }
    }

	return (
		<ScrollView style={{backgroundColor: '#406BE9'}}>
			<View style={styles.container}>
				<Text style={styles.titleText}>Extra Pages</Text>
				<View style={styles.buttonsContainer}>

					<TouchableOpacity
						style={[styles.button, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}
						onPress={() => dispatch({type: ACH_ON})}
						activeOpacity={0.8}
					>
						<Text style={styles.text}>Achievements</Text>
						<Ionicons name="arrow-forward" color="white" size={22}/>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, {borderBottomWidth: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
						onPress={() => dispatch({type: STAT_ON})}
						activeOpacity={0.8}
					>
						<Text style={styles.text}>User Stats</Text>
						<Ionicons name="arrow-forward" color="white" size={22}/>
					</TouchableOpacity>
				</View>
				<Text style={styles.titleText}>Difficulty</Text>
				<DifficultyOptions />
				<Text style={styles.titleText}>Extra</Text>
				<View style={[styles.buttonsContainer, {marginBottom: 10}]}>
					<TouchableOpacity
						style={[styles.button, {borderBottomWidth: 0, borderRadius: 5}]}
						activeOpacity={0.8}
						onPress={() => dispatch({type: SIGN_OUT})}
					>
						<Text style={styles.text}>Sign Out</Text>
						<MaterialIcons name='logout' size={22} color='white'/>
					</TouchableOpacity>
				</View>
				<Text style={styles.titleText}>Secret Temperature Changing Buttons</Text>
				<View style={[styles.buttonsContainer, {marginBottom: 10}]}>
					<TouchableOpacity
						style={[styles.button, {borderRadius: 5, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}]}
						activeOpacity={0.8}
						onPress={() => {
						    dispatch({type: SET_HOT})
                            if (currentShirtType != "hot") {
                            	dispatch({type: DECREASE_HEALTH,data:5})
                            } else {
                            	dispatch({type: INCREASE_HEALTH,data:10})
                            }
						 }}
					>
						<Text style={styles.text}>Hot</Text>
						{temp === 'Hot' &&
							<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.8}
						onPress={() => {
						dispatch({type: SET_MILD})
                            if (currentShirtType != "mild") {
                            	dispatch({type: DECREASE_HEALTH,data:5})
                            } else {
                            	dispatch({type: INCREASE_HEALTH,data:10})
                            }
						}}
					>
						<Text style={styles.text}>Mild</Text>
						{temp === 'Mild' &&
							<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, {borderBottomWidth: 0, borderRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0}]}
						activeOpacity={0.8}
						onPress={() => {
						    dispatch({type: SET_COLD})
                            if (currentShirtType != "cold") {
                            	dispatch({type: DECREASE_HEALTH,data:5})
                            } else {
                            	dispatch({type: INCREASE_HEALTH,data:10})
                            }
						}}
					>
						<Text style={styles.text}>Cold</Text>
						{temp === 'Cold' &&
							<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
				</View>
				<Text style={styles.titleText}>Secret Weather Changing Buttons</Text>
				<View style={[styles.buttonsContainer, {marginBottom: 50}]}>
					<TouchableOpacity
						style={[styles.button, {borderRadius: 5, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}]}
						activeOpacity={0.8}
						onPress={() => {
							dispatch({type: SET_WEATHER, status: 'Rain'})
							dispatch({type: SET_IMG, data: '10d'});
						}}
					>
						<Text style={styles.text}>Rain</Text>
						{weather === 'Rain' &&
						<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.8}
						onPress={() => {
							dispatch({type: SET_WEATHER, status: 'Cloudy'})
							dispatch({type: SET_IMG, data: '03d'});
						}}
					>
						<Text style={styles.text}>Cloudy</Text>
						{weather === 'Cloudy' &&
						<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.8}
						onPress={() => {
							dispatch({type: SET_WEATHER, status: 'Thunderstorm'});
							dispatch({type: SET_IMG, data: '11d'});

						}}
					>
						<Text style={styles.text}>Thunderstorm</Text>
						{weather === 'Thunderstorm' &&
						<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, {borderBottomWidth: 0, borderRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0}]}
						activeOpacity={0.8}
						onPress={() => {
							dispatch({type: SET_WEATHER, status: 'Clear'});
							dispatch({type: SET_IMG, data: '01d'});
						}}
					>
						<Text style={styles.text}>Clear</Text>
						{weather === 'Clear' &&
						<Ionicons name="checkmark" color="white" size={22}/>
						}
					</TouchableOpacity>
				</View>
				<AchievementsScreen />
				<StatsScreen />
			</View>
		</ScrollView>
	);
};

export default SettingsScreen;
