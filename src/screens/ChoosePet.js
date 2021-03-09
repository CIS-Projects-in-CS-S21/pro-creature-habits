import React from 'react';
import {Text, View, Button, StyleSheet, Image, TextInput} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    text2: {
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },
    image: {
        width: 100,
        height: 100,
    },
    imageBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    },
    }
);

const choosePetScreen = () => {
    const [value, onChangeText] = React.useState('');
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Please choose your starter pet</Text>
            <View style={styles.imageBoxes}>
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
            <Text style={styles.text}>Please enter a name for your pet</Text>
            <TextInput
                  style={styles.text2}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                />
        </View>
    );
};

export default choosePetScreen;
