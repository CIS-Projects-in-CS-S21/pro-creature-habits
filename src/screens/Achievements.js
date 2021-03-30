import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ACH_OFF} from "../redux/achievementsVisible";
import AchievementsContainer from "../components/achievementsComponents/AchievementsContainer";


const styles = StyleSheet.create({
    text: {
        color: 'white',
		fontSize: 20
    },
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#406BE9'
	},
	modalButton: {
		backgroundColor: '#402688',
		padding: 15,
		borderRadius: 10
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
});



const AchievementsScreen = () => {
	const dispatch = useDispatch();
    return (
		<View style={styles.modalContainer}>
			<Modal
				animationType="slide"
				transparent={false}
				visible={useSelector(state=>state.achievementsVisible)}
			>
				<View style={styles.modalHeader}>
					<Text style={styles.modalHeaderText}>Achievements</Text>
				</View>
				<AchievementsContainer/>
				<View style={styles.modalContainer}>
					<TouchableOpacity
						onPress={() => dispatch({type: ACH_OFF})}
						style={styles.modalButton}
					>
						<Text style={styles.text}>Close</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
    );
};

export default AchievementsScreen;
