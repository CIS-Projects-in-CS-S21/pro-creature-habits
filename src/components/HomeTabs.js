import HomeScreen from "../screens/Home";
import PetProfileScreen from "../screens/Profile";
import MarketplaceScreen from "../screens/Marketplace";
import SettingsNav from "./SettingsNav";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';

import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';


const Tab = AnimatedTabBarNavigator();

const HomeTabs = () => {

	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'list' : 'list-outline';
					} else if (route.name === 'Profile') {
						iconName = focused ? 'paw' : 'paw-outline';
					} else if (route.name === 'Marketplace') {
						iconName = focused ? 'cart': 'cart-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					}

					return <Ionicons name={iconName} size={25} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#402688',
				inactiveTintColor: 'white',
				activeBackgroundColor: 'white',
				labelStyle: {fontSize: 16},
				tabStyle: {
					padding: 0,
				}
			}}
			appearence={{
				tabBarBackground: '#402688',
				tabButtonLayout: 'horizontal',
				dotCornerRadius: 20
			}}

		>
			<Tab.Screen name="Home" component={HomeScreen}/>
			<Tab.Screen name="Profile" component={PetProfileScreen} />
			<Tab.Screen name="Marketplace" component={MarketplaceScreen}/>
			<Tab.Screen name="Settings" component={SettingsNav}/>
		</Tab.Navigator>
	);
};

export default HomeTabs;
