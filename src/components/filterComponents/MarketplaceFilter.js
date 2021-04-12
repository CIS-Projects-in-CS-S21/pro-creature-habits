import {View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {FILTER, FILTER_ALL} from "../../redux/marketplaceInventory";

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


const MarketplaceFilter = () => {
	const [marketFilter, setMarketFilter] = React.useState('all');
	const dispatch = useDispatch();

	const changeFilter = (category) => {
		setMarketFilter(category)
		if(category === 'all') {
			dispatch({type: FILTER_ALL});
		} else {
			dispatch({type: FILTER, data: category});
		}
	}

	return (
		<View style={styles.filterContainer}>
			<TouchableOpacity
				onPress={() => changeFilter('all')}
				style={[styles.filterButton, marketFilter === 'all' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='apps-sharp' color={marketFilter === 'all' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('food')}
				style={[styles.filterButton, marketFilter === 'food' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='fast-food-sharp' color={marketFilter === 'food' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('clothes')}
				style={[styles.filterButton, marketFilter === 'clothes' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='shirt-sharp' color={marketFilter === 'clothes' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('toys')}
				style={[styles.filterButton, marketFilter === 'toys' && {backgroundColor: 'white'}]}
			>
				<Ionicons name='tennisball-sharp' color={marketFilter === 'toys' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => changeFilter('grooming')}
				style={[styles.filterButton, marketFilter === 'grooming' && {backgroundColor: 'white'}]}
			>
				<MaterialCommunityIcons name='spray-bottle' color={marketFilter === 'grooming' ? filterColor : 'white'} size={iconSize}/>
			</TouchableOpacity>
		</View>
	)
}

export default MarketplaceFilter;
