import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_DAY} from "../../redux/daysChecked";


const CheckboxGroup = () => {
	const days = useSelector(state => state.daysChecked);
	const dispatch = useDispatch();

	const setToggleCheckBox = (key) => {
		dispatch({type: TOGGLE_DAY, data: key});
	}

	return (
		<View style={{flexDirection: 'column', padding: 10}}>
			{Object.keys(days).map((key,index) => {
				return(
					<View style={{flexDirection: 'row', padding: 5}} key={index}>
						<TouchableOpacity
							onPress={() => setToggleCheckBox(key)}
							style={{paddingRight: 10}}
						>
							<MaterialCommunityIcons name={days[key].on ? 'checkbox-marked-outline': 'checkbox-blank-outline'} size={24} color='white'/>
						</TouchableOpacity>
						<Text style={{color: 'white', fontSize: 20}}>{key}</Text>
					</View>
				)
			})}
		</View>
	)
}

export default CheckboxGroup;
