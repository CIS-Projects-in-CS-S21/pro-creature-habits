import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, View} from "react-native";
import 'react-native-gesture-handler';
import balanceReducer from "./redux/coinBalance";
import marketplaceInventoryReducer from "./redux/marketplaceInventory";
import petInfoReducer from "./redux/petInfo";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { combineReducers } from "redux";


import HomeTabs from "./components/HomeTabs";
import SignInScreen from "./screens/SignIn";
import GoogleSignUpScreen from "./screens/GoogleSignIn";
import SignUpScreen from "./screens/SignUp";
import AccountCreationScreen from "./screens/AccountCreation";
import ChoosePet from "./screens/ChoosePet";
import Profile from "./screens/Profile";
import {API_WEATHER_KEY} from "./components/Keys";
import modalVisibleReducer from "./redux/modalVisible";
import selectedMarketItemReducer from "./redux/selectedMarketItem";
import FlashMessage from "react-native-flash-message";
import statsVisibleReducer from "./redux/statsVisible";
import achievementsVisibleReducer from "./redux/achievementsVisible";
import difficultyReducer from "./redux/difficulty";
import achievementsCompleteReducer from "./redux/achievementsComplete";
import achievementFilterReducer from "./redux/achievementFilter";
import marketplaceItemsBoughtReducer from "./redux/marketplaceItemsBought";
import statTrackerReducer from "./redux/statTracker";

import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AsyncStorage } from 'react-native'
export const RESET_BUTTON_PRESSED = 'RESET_BUTTON_PRESSED';


const Stack = createStackNavigator();

const reducer = combineReducers({
	coins: balanceReducer,
	shopItems: marketplaceInventoryReducer,
	petDetails: petInfoReducer,
	modalVisible: modalVisibleReducer,
	selectedMarketItem: selectedMarketItemReducer,
	statsVisible: statsVisibleReducer,
	achievementsVisible: achievementsVisibleReducer,
	difficulty: difficultyReducer,
	achievements: achievementsCompleteReducer,
	achievementsFilter: achievementFilterReducer,
	itemsBought: marketplaceItemsBoughtReducer,
	userStats: statTrackerReducer
});

const rootReducer = (state, action) => {
	if (action.type === RESET_BUTTON_PRESSED) {
		persistConfig.storage.removeItem('persist:root')
		state = undefined;
	}
	return reducer(state, action);
};

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

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
  <PersistGate persistor={persistor}>
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
						<Stack.Screen name="Sign Up">
							{(props) => (
								<SignUpScreen {...props} onSignUp={handleSignUp} />
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
				<FlashMessage position="top"/>
			</NavigationContainer>
</PersistGate>
		</Provider>
	);
};


export default App;
