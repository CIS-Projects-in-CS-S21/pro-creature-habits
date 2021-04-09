import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Cards from "../components/marketplaceComponents/Cards";
import BuyModal from "../components/marketplaceComponents/BuyModal";
import MarketplaceFilter from "../components/filterComponents/MarketplaceFilter";

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#406BE9',
    },
});

const MarketplaceScreen = () => {
    return (
    	<View style={{flex: 1}}>
			<MarketplaceFilter/>
			<ScrollView style={styles.container}>

				<Cards items={useSelector(state => state.shopItems)}/>
				<BuyModal/>
			</ScrollView>
		</View>
    );
};

export default MarketplaceScreen;
