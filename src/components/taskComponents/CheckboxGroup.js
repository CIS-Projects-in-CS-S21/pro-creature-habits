import React from "react";
import {View} from "react-native";
import CheckBox from "@react-native-community/checkbox";


const CheckboxGroup = () => {
	const [days, setDays] =  React.useState({
		Sunday: {on: true},
		Monday: {on: true},
		Tuesday: {on: true},
		Wednesday: {on: true},
		Thursday: {on: true},
		Friday: {on: true},
		Saturday: {on: true},
	})

	const setToggleCheckBox = (key) => {
		let newDays = {...days};
		newDays[key].on = !newDays[key].on;
		setDays(newDays);
	}

	return (
		<View>
			{Object.keys(days).map((key,index) => {
				return(
					<CheckBox
						disabled={false}
						value={days[key].on}
						onValueChange={() => setToggleCheckBox(key)}
						key={index}
					/>
				)
			})}
		</View>
	)
}

export default CheckboxGroup;
