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
        color: 'white'

    },
});

const AccountCreationScreen = ({ onSignUp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Creation Screen</Text>
            <Button color="#7e8ffc" title="Sign Up" onPress={onSignUp} />
        </View>
    );
};

export default AccountCreationScreen;
