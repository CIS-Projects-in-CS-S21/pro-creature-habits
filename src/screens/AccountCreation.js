import React from 'react';
import {Text, View, Button, StyleSheet, TextInput} from "react-native";

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
});

const AccountCreationScreen = ({ onSignUp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Creation Screen</Text>
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    margin: 20,
                    borderColor: 'black',
                    backgroundColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Your Name,  Please"
            />
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    margin: 20,
                    borderColor: 'black',
                    backgroundColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Birthday"
            />

            <Button color="#7e8ffc" title="Sign Up" onPress={onSignUp} />
        </View>
    );
};

export default AccountCreationScreen;
