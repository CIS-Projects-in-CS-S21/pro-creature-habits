import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, View, TouchableOpacity} from "react-native";
import 'react-native-gesture-handler';
import balanceReducer from "./redux/coinBalance";
import marketplaceInventoryReducer from "./redux/marketplaceInventory";
import petInfoReducer from "./redux/petInfo";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { combineReducers } from "redux";
import { MaterialIcons } from "@expo/vector-icons";


import HomeTabs from "./components/HomeTabs";
import SignInScreen from "./screens/SignIn";
import GoogleSignUpScreen from "./screens/GoogleSignIn";
import AccountCreationScreen from "./screens/AccountCreation";
import ChoosePet from "./screens/ChoosePet";
import Profile from "./screens/Profile";
import {API_WEATHER_KEY} from "./components/Keys";
import modalVisibleReducer from "./redux/modalVisible";
import selectedMarketItemReducer from "./redux/selectedMarketItem";

const Stack = createStackNavigator();

const reducer = combineReducers({
	coins: balanceReducer,
	shopItems: marketplaceInventoryReducer,
	petDetails: petInfoReducer,
	modalVisible: modalVisibleReducer,
	selectedMarketItem: selectedMarketItemReducer
});

const store = createStore(reducer);

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);
	const [temperature, setTemperature] = React.useState(null);
	const [weather, setWeather] = React.useState(null);

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
			getWeather();
		}, 10000);
		return () => clearInterval(interval);
	}, [])

	const handleSignIn = () => {
		setIsAuthenticated(true);
	};

	const handleSignOut = () => {
		setIsAuthenticated(false);
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
		<Provider store={store}>
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
								headerRight: () => (
									<TouchableOpacity style={{marginRight: 10}} onPress={() => {
										handleSignOut();
									}}
									>
										<MaterialIcons name='logout' size={36} color='white'/>
									</TouchableOpacity>
								),
								headerLeft: () => (
									<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 10}}>
										<Image style={{width: 40, height: 40, marginTop: 5 }}  source={{uri: `https://openweathermap.org/img/wn/${weather}@2x.png`}}/>
										<Text style={{color: 'white', fontSize: 25, marginTop: 10, }}>{Math.round(temperature)}&deg;F</Text>
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
							name="Sign In"
							options={{
								animationTypeForReplace: 'pop',
								headerTitle: () => (
									<Text style={{fontSize: 25, color: 'white', marginBottom: 5}}>
										Sign In
									</Text>
								),
								headerStyle : {
									backgroundColor: '#402688',
									shadowOpacity: 0,
									height: 100
								},
							}}>
							{(props) => (
								<SignInScreen {...props} onSignIn={handleSignIn} />
							)}
						</Stack.Screen>
						<Stack.Screen name="Google Sign Up">
							{(props) => (
								<GoogleSignUpScreen {...props} onSignUp={handleSignUp} />
							)}
						</Stack.Screen>
						<Stack.Screen
							name="Account Creation"
							options={{
								headerTitle: () => (
									<Text style={{fontSize: 25, color: 'white', marginBottom: 5}}>
										Account Creation
									</Text>
								),
								headerStyle : {
									backgroundColor: '#402688',
									shadowOpacity: 0,
									height: 100
								},
							}}>
							{(props) => (
								<AccountCreationScreen {...props} onSignUp={handleSignUp} />
							)}
						</Stack.Screen>
						<Stack.Screen name="Choose Pet">
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
			</NavigationContainer>
		</Provider>
	);
};


export default App;
