import React from 'react';
import { ScrollView, Button, Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#406BE9',
	},
	text: {
		color: 'white',
		fontSize: 20
	},
	input:{
		width:"85%",
		backgroundColor: "white",
		marginBottom: 10,
		padding: 15,
		borderRadius: 10
	},
    buttonsContainer:{
		flexDirection: "row",
		justifyContent: "center",
		padding: 10
	},
	topButton:{
		padding: 10,
		width: "70%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: '75%',
		borderRadius: 10
	},
	button:{
		padding: 10,
		width: "70%",
		backgroundColor: '#402688',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10
	},
});

const TutorialScreen = ({navigation,onSignUp}) => { //add onSignUp later for test

    
    return (

        <View style={styles.container}>
            <ScrollView>
            {/* <TouchableOpacity
                onPress={}
                style={styles.button}
		    /> */}
                <Text>Tutorials Page</Text>
                <View style={styles.buttonsContainer}>
                    
                    <TouchableOpacity
                        style={styles.topButton}
                        onPress={()=>{navigation.navigate('Home Page')}}
                    >
                        <Text style={styles.text}>Start Tutorial</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSignUp}
                    >
                        <Text style={styles.text}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default TutorialScreen;