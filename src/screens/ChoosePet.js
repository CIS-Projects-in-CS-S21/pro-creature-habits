import React from 'react';
import {Text, View, Button, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white'
    },
    image: {
        width: 50,
        height: 50,
    },
});

const choosePetScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please choose your start pet</Text>
            <View style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          }}>
            <Image
                style={styles.image}
                source={require('../images/cutekitten.png')}
            />
            <Image
                style={styles.image}
                source={require('../images/lizard.png')}
            />
            <Image
                style={styles.image}
                source={require('../images/pixeldog.png')}
            />
            </View>
        </View>

    );
};

export default choosePetScreen;
