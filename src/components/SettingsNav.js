import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings";
import AchievementsScreen from "../screens/Achievements";
import UserStatsScreen from "../screens/UserStats";
import React from "react";

const SettingsStack = createStackNavigator();

const SettingsNav = () => {
	return (
		<SettingsStack.Navigator mode="modal">
			<SettingsStack.Screen name="Settings" options={{headerShown: false}}>
				{(props) => (
					<SettingsScreen {...props} />
				)}
			</SettingsStack.Screen>
			<SettingsStack.Screen name="Achievements" component={AchievementsScreen}/>
			<SettingsStack.Screen name="User Stats" component={UserStatsScreen}/>
		</SettingsStack.Navigator>
	)
};

export default SettingsNav;
