import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, View, StyleSheet} from "react-native";
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import {TIME_CHANGE} from "./redux/timeOfBars";
import TutorialScreen from './screens/Tutorial'
import HomeTutorial from './screens/tutorialScreens/Home'
import ProfileTutorial from './screens/tutorialScreens/Profile'
import MarketplaceTutorial from './screens/tutorialScreens/Marketplace'
import SettingsTutorial from './screens/tutorialScreens/Settings'
import HomeTabs from "./components/HomeTabs";
import GoogleSignUpScreen from "./screens/GoogleSignIn";
import ChoosePet from "./screens/ChoosePet";
import Profile from "./screens/Profile";
import {API_WEATHER_KEY} from "./components/Keys";
import FlashMessage from "react-native-flash-message";
import IntroScreen from "./screens/Intro";
import CreatePINScreen from "./screens/CreatePIN";
import InputPINScreen from "./screens/InputPIN";
import {UPDATE_DATE} from "./redux/currentDay";
import {UPDATE_DAILY_TASKS} from "./redux/dailyTasks";
import {SET_WEATHER} from "./redux/weatherStatus";
import {UPDATE_DATED_TASKS} from "./redux/datedTasks";
import {INC_DAYS_ROW, RESET_DAYS_ROW} from "./redux/daysInARow";
import {INCREMENT_STAT, SET_STAT} from "./redux/statTracker";
import {AUTHENTICATE} from "./redux/authenticated";
import {SET_COLD, SET_HOT, SET_MILD} from "./redux/temperature";
import {SET_IMG} from "./redux/weatherImg";

export const RESET_BUTTON_PRESSED = 'RESET_BUTTON_PRESSED';


const Stack = createStackNavigator();

const styles = StyleSheet.create({
	balanceContainer: {
		flexDirection: 'row',
		margin: 10,
		marginBottom: 15
	},
	coinImage: {
		height: 30,
		width: 30,
	},
})




const AppUnwrapped = () => {
	const weatherStatusLog = useSelector(state => state.weatherStatus);
	const weatherImage = useSelector(state=>state.weatherImg);
	const dispatch = useDispatch();
	const date = useSelector(state=>state.currentDay);
	const isAuthenticated = useSelector(state=>state.authenticated)
	const temperature = useSelector(state=>state.temperature)

	const getWeather = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				fetch(
					`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&` +
					`lon=${position.coords.longitude}&exclude=current,minutely,hourly,alerts&appid=${API_WEATHER_KEY}&units=imperial`
				)
					.then(res => res.json())
					.then(json => {
						dispatch({type: SET_IMG, data: json.daily[0].weather[0].icon});
						if(json.daily[0].temp.day <= 50) {
							dispatch({type: SET_COLD})
						} else if (json.daily[0].temp.day >= 80) {
							dispatch({type: SET_HOT})
						} else {
							dispatch({type: SET_MILD})
						}
						const weatherToday = json.daily[0].weather[0].main;
						if (weatherToday === 'Rain' || 'Thunderstorm' || 'Clear' || 'Clouds') {
							dispatch({type: SET_WEATHER, status: weatherToday});
						} else {
							dispatch({type: SET_WEATHER, status: 'Clear'});
						}

						//// DEBUG:

						console.log("Current weather status in reducer: " + weatherStatusLog);
					});


			}
		);
	};



	React.useEffect(() => {
		const interval = setInterval(() => {
			console.log(weatherStatusLog, temperature);
			const day = new Date();
			dispatch({type: TIME_CHANGE, data: day});
			if (date === [day.getDate(), day.getMonth(), day.getFullYear()].join(',')) {
				console.log(true);
			} else {
				console.log(false);
				if (date === [day.getDate()-1, day.getMonth(), day.getFullYear()].join(',')) {
					dispatch({type: INCREMENT_STAT, data: 'days_logged_row'});
				} else {
					dispatch({type: SET_STAT, data: ['days_logged_row', 1]});
				}
				dispatch({type: UPDATE_DATE});
				dispatch({type: UPDATE_DAILY_TASKS});
				dispatch({type: UPDATE_DATED_TASKS});
				getWeather();
			}
		}, 10000);
		return () => clearInterval(interval);
	}, [date, weatherStatusLog, temperature]);


	const handleSignIn = () => {
		dispatch({type: AUTHENTICATE});
	};

	const handleSignUp = () => {
		dispatch({type: AUTHENTICATE});
	};

	function getHeaderTitle(route) {
		const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

		switch(routeName) {
			case 'Home':
				return 'Task List';
			case 'Profile':
				return 'Pet Profile';
			case 'Marketplace':
				return 'Marketplace';
			case 'Settings':
				return 'Settings';
		}
	}




	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isAuthenticated ? (
					<Stack.Screen
						name="Home"
						component={HomeTabs}
						options={ ({ route}) => ({
							headerTitle: () => (
								<Text style={{fontSize: 30, color: 'white', marginBottom: 5}}>
									{getHeaderTitle(route)}
								</Text>
							),
							headerLeft: () => (
								<View style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									marginLeft: 10,
									borderRadius: 10,
									margin: 7,
									alignItems: 'center',
									padding: 5,
									backgroundColor: '#6d90f6',
								}}>
									<Image style={{width: 25, height: 40, marginRight: 5}}  source={{uri: `https://openweathermap.org/img/wn/${weatherImage}@2x.png`}}/>
									<Text style={{color: 'white', fontSize: 25 }}>{temperature}</Text>
								</View>
							),
							headerRight: () => (
								<View style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									marginLeft: 10,
									borderRadius: 10,
									margin: 7,
									alignItems: 'center',
									padding: 5,
									backgroundColor: '#6d90f6',
								}}>
									<Text style={{fontSize: 25, color: 'white'}}>{useSelector(state=>state.coins)}</Text>
									<Image
										style={styles.coinImage}
										source={require('./test_images/coin.png')}
									/>
								</View>
							),
							headerStyle : {
								backgroundColor: '#402688',
								shadowOpacity: 0,
								height: 100
							},
						})}
					/>
				) : (
					<>
					<Stack.Screen
						name="Intro"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<IntroScreen {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
					<Stack.Screen
						name="Create PIN"
						options={{
							headerShown: false
						}}>
						{(props) => (
							<CreatePINScreen {...props} onSignIn={handleSignIn} />
						)}
					</Stack.Screen>
					<Stack.Screen name="Google Sign Up">
						{(props) => (
							<GoogleSignUpScreen {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
					<Stack.Screen name="Input PIN"
					options={{
							headerShown: false
						}} >
						{(props) => (
							<InputPINScreen {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
					<Stack.Screen
						name="Choose Pet"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<ChoosePet {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
                    <Stack.Screen
						name="App Tutorial"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<TutorialScreen {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
                    <Stack.Screen
						name="Home Page"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<HomeTutorial {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
                    <Stack.Screen
						name="Profile Page"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<ProfileTutorial {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
                    <Stack.Screen
						name="Marketplace Page"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<MarketplaceTutorial {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
                    <Stack.Screen
						name="Settings Page"
						options={{
							headerShown: false
						}}
					>
						{(props) => (
							<SettingsTutorial {...props} onSignUp={handleSignUp} />
						)}
					</Stack.Screen>
					<Stack.Screen name="Profile"
						  component={Profile}
						  >
					</Stack.Screen>
					</>
				)}
			</Stack.Navigator>
			<FlashMessage position="top"/>
		</NavigationContainer>
	);
};


export default AppUnwrapped;
