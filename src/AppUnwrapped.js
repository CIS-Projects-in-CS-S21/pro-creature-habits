import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, View, StyleSheet} from "react-native";
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import {TIME_CHANGE} from "./redux/timeOfBars";


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
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);
	const [temperature, setTemperature] = React.useState(null);
	const [weather, setWeather] = React.useState(null);
	const dispatch = useDispatch();
	const date = useSelector(state=>state.currentDay);

	const getWeather = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&` +
					`lon=${position.coords.longitude}&appid=${API_WEATHER_KEY}&units=imperial`
				)
					.then(res => res.json())
					.then(json => {
						setWeather(json.weather[0].icon);
						setTemperature(json.main.temp);
					});
			}
		);
	};



	React.useEffect(() => {
		getWeather();
		const interval = setInterval(() => {
			const day = new Date();
			console.log("setting interval")
			dispatch({type: TIME_CHANGE, data: day});
			if (date === [day.getDate(), day.getMonth(), day.getFullYear()].join(',')) {
				console.log(true);
			} else {
				console.log(false);
				dispatch({type: UPDATE_DATE});
				dispatch({type: UPDATE_DAILY_TASKS});
			}
			getWeather();
		}, 60000);
		return () => clearInterval(interval);
	}, []);


	const handleSignIn = () => {
		setIsAuthenticated(true);
	};

	const handleSignUp = () => {
		setIsAuthenticated(true);
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
								<Text style={{fontSize: 25, color: 'white', marginBottom: 5}}>
									{getHeaderTitle(route)}
								</Text>
							),
							headerLeft: () => (
								<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 10}}>
									<Image style={{width: 40, height: 40, marginTop: 5 }}  source={{uri: `https://openweathermap.org/img/wn/${weather}@2x.png`}}/>
									<Text style={{color: 'white', fontSize: 25, marginTop: 10, }}>{Math.round(temperature)}&deg;F</Text>
								</View>
							),
							headerRight: () => (
								<View style={styles.balanceContainer}>
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