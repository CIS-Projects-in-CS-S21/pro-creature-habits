import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, View, StyleSheet} from "react-native";
import 'react-native-gesture-handler';
import balanceReducer from "./redux/coinBalance";
import marketplaceInventoryReducer from "./redux/marketplaceInventory";
import petInventoryReducer from "./redux/petInventory";
import petInfoReducer from "./redux/petInfo";
import { createStore } from "redux";
import {Provider, useSelector} from 'react-redux'
import { combineReducers } from "redux";


import HomeTabs from "./components/HomeTabs";
import GoogleSignUpScreen from "./screens/GoogleSignIn";
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
import petMVR from "./redux/petModalVisible";
import selectedPetItemReducer from "./redux/selectedPetItem";
import { persistStore, persistReducer } from 'redux-persist';
import modalTaskReducer from "./redux/createTaskModal";
import editTaskReducer from "./redux/editTaskModal";
import oneTimeTasksReducer from "./redux/oneTimeTasks";
import selectedDateReducer from "./redux/selectedDate";
import taskEditIndexReducer from "./redux/taskEditIndex";
import taskInputReducer from "./redux/taskInput";
import dailyTaskModalReducer from "./redux/dailyTaskModal";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AsyncStorage } from 'react-native'
import loginReducer from "./redux/firstLogin";
import pinReducer from "./redux/createPIN";
import IntroScreen from "./screens/Intro";
import CreatePINScreen from "./screens/CreatePIN";
import InputPINScreen from "./screens/InputPIN";
import hintReducer from "./redux/hint";
import daysCheckedReducer from "./redux/daysChecked";
import dailyTasksReducer from "./redux/dailyTasks";
import taskFilterReducer from "./redux/taskFilter";
import editDailyReducer from "./redux/editDailyTaskModal";
import completedDatedTasksReducer from "./redux/completedDatedTasks";
import completedDailyTasksReducer from "./redux/completedDailyTasks";
export const RESET_BUTTON_PRESSED = 'RESET_BUTTON_PRESSED';


const Stack = createStackNavigator();

const reducer = combineReducers({
	coins: balanceReducer,
	shopItems: marketplaceInventoryReducer,
	petDetails: petInfoReducer,
	petInv: petInventoryReducer,
	modalVisible: modalVisibleReducer,
	selectedMarketItem: selectedMarketItemReducer,
	statsVisible: statsVisibleReducer,
	achievementsVisible: achievementsVisibleReducer,
	difficulty: difficultyReducer,
	achievements: achievementsCompleteReducer,
	achievementsFilter: achievementFilterReducer,
	itemsBought: marketplaceItemsBoughtReducer,
	userStats: statTrackerReducer,
	petMV: petMVR,
	selectedPetItem: selectedPetItemReducer,
	firstLogin: loginReducer,
	pin: pinReducer,
	pintHint: hintReducer,
	taskCreateVisible: modalTaskReducer,
	editTaskVisible: editTaskReducer,
	oneTimeTasks: oneTimeTasksReducer,
	selectedDate: selectedDateReducer,
	taskEditIndex: taskEditIndexReducer,
	taskInput: taskInputReducer,
	dailyTaskVisible: dailyTaskModalReducer,
	daysChecked: daysCheckedReducer,
	dailyTasks: dailyTasksReducer,
	taskFilter: taskFilterReducer,
	dailyEditModal: editDailyReducer,
	completedDatedTasks: completedDatedTasksReducer,
	completedDailyTasks: completedDailyTasksReducer
});

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
		}, 60000);
		return () => clearInterval(interval);
	}, [])

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
</PersistGate>
		</Provider>
	);
};


export default App;
