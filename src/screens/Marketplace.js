import React from 'react';
import {Text, View, Button, StyleSheet, Image} from "react-native";
import {TouchableHighlight} from "react-native";


const styles = StyleSheet.create({
    container: {
    	flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white'

    },
	cardsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20
	},
	cardContainer: {
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 20,
		padding: 8,
		backgroundColor: 'lightblue'
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingLeft: 5,
		paddingRight: 5
	},
	coin: {
    	width: 22,
		height: 26
	}
});

const Card = () => {
	return (

		<TouchableHighlight
			activeOpacity={0.6}
			onPress={() => alert('You bought a burger :)')}
			style={{borderRadius: 20}}
		>
			<View style={styles.cardContainer}>
				<Image style={{width:75, height:75}} source={require('../test_images/burger.png')}/>
				<View style={styles.cardFooter}>
					<Text style={{fontSize: 20, color: 'white'}}>10</Text>
					<Image style={styles.coin} source={require('../test_images/coin.png')}/>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const Cards = () => {
	return (
		<View style={styles.cardsContainer}>
			<Card/>
			<Card/>
			<Card/>
		</View>
	)
}

const MarketplaceScreen = () => {
    return (
        <View style={styles.container}>
			<Cards/>
        </View>
    );
};

export default MarketplaceScreen;
