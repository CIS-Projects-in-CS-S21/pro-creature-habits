import {View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {FILTER_ALL_PET, FILTER_PET} from "../../redux/petInventory";

const filterColor = '#2a56ba'

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		backgroundColor: filterColor,
	},
	filterButton: {
		padding: 10,
		alignItems: 'center',
		flex: 1,
		borderRadius: 10
	}
})
const iconSize = 40;


const PetInventoryFilter = () => {
	const [petInvFilter, setPetInvFilter] = React.useState('all');
	const dispatch = useDispatch();


	const changeFilter = (category) => {
		setPetInvFilter(category);
		if(category === 'all') {
			dispatch({type: FILTER_ALL_PET});
		} else {
			dispatch({type: FILTER_PET, data: category});
		}
	}

	return (
		<View style={styles.filterContainer}>
			<TouchableOpacity
				onPress={() => changeFilter('all')}
				style={[styles.filterButton, petInvFilter === 'all' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='apps-sharp' color={petInvFilter === 'all' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('food')}
				style={[styles.filterButton, petInvFilter === 'food' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='fast-food-sharp' color={petInvFilter === 'food' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('clothes')}
				style={[styles.filterButton, petInvFilter === 'clothes' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='shirt-sharp' color={petInvFilter === 'clothes' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('toys')}
				style={[styles.filterButton, petInvFilter === 'toys' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='tennisball-sharp' color={petInvFilter === 'toys' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
		</View>
	)
}

export default PetInventoryFilter;
