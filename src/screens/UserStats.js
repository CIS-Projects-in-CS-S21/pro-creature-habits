import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white',
    },
});

const StatsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stats Screen</Text>
        </View>
    );
};

export default StatsScreen;