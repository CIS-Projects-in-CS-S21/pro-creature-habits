import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {STAT_OFF} from "../redux/statsVisible";

const styles = StyleSheet.create({
    text: {
        color: 'white',
		fontSize: 20,
    },
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#406BE9',
	},
	modalButton: {
		backgroundColor: '#402688',
		padding: 15,
		borderRadius: 10,
	},
	modalHeader: {
		backgroundColor: '#406BE9',
		alignItems: 'center',
		paddingTop: 50,
	},
	modalHeaderText: {
		color: 'white',
		fontSize: 30
	},
	bodyContainer: {
    	flexDirection: 'row',
		backgroundColor: '#406BE9',
		padding: 20

	},
	statsContainer: {
    	flexDirection: 'column',
		alignItems: 'stretch',
		flexGrow: 1,
		paddingTop: 5,
		borderColor: 'white',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11,
		backgroundColor: '#402688',
		borderRadius: 5
	},
	statContainer: {
    	margin: 5,
		marginRight: 10,
		marginLeft: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',

	}
});



const StatsScreen = () => {
	const dispatch = useDispatch();
	const stats = useSelector(state=>state.userStats);
    return (
		<View style={styles.modalContainer}>
			<Modal
				animationType="slide"
				transparent={false}
				visible={useSelector(state=>state.statsVisible)}
			>
				<View style={styles.modalHeader}>
					<Text style={styles.modalHeaderText}>User Stats</Text>
				</View>
				<ScrollView style={{backgroundColor: '#406BE9'}}>
				<View style={styles.bodyContainer}>
					<View style={styles.statsContainer}>
						{Object.keys(stats).map((stat, index) => {
							if (index === Object.keys(stats).length-1) {
								return (
									<View key={index}
										style={[styles.statContainer,
											{
												borderBottomWidth: 0,
												borderBottomRightRadius: 5,
												borderBottomLeftRadius: 5
											}]}>
										<Text style={styles.text}>{stats[stat].name}:</Text>
										<Text style={styles.text}>{stats[stat].count}</Text>
									</View>
								)
							}
							return (
								<View key={index} style={styles.statContainer}>
									<Text style={[styles.text, {width: '80%'}]}>{stats[stat].name}:</Text>
									<Text style={styles.text}>{stats[stat].count}</Text>
								</View>
							)
						})}
					</View>
				</View>
				<View style={styles.modalContainer}>
					<TouchableOpacity
						onPress={() => dispatch({type: STAT_OFF})}
						style={styles.modalButton}
					>
						<Text style={styles.text}>Close</Text>
					</TouchableOpacity>
				</View>
				</ScrollView>
			</Modal>
		</View>
    );
};

export default StatsScreen;
