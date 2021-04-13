import React from 'react';
import {Text, View, Button, StyleSheet, Image, TextInput, TouchableHighlight, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import {CHANGE} from "../redux/petInfo";
import {TIME_FEED_CHANGE,TIME_CHANGE} from "../redux/timeOfBars"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#406BE9',
		justifyContent: 'center',
		alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 40,
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
        borderWidth: 2,
		borderColor: "white",
		borderRadius: 20,
		backgroundColor: "lightblue",
    },
    imageContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
    },
    input:{
		width:"85%",
		backgroundColor: "white",
		margin: 20,
		padding: 10,
		borderRadius: 10
	},
	button:{
		padding: 10,
		width: "40%",
		backgroundColor: '#402688',
		alignItems: 'center',
		margin: 10,
		borderRadius: 10
	},
});





const choosePetScreen = ({onSignUp}) => {
    const [text, onChangeText] = React.useState('');
    const [colorImage1, changeValue1] = React.useState('#402688');
    const [colorImage2, changeValue2] = React.useState('#402688');
    const [petChoice,changePet] = React.useState('');
    const dispatch = useDispatch();



    const onPress = (animal) => {

        if (animal === "cat") {
			changeValue1("orange");
			changeValue2('#402688');
			changePet("cat");
        } else {
        	changeValue2("orange");
            changeValue1('#402688');
            changePet("dog");
        }
    }


    const submitData = () => {
         const array = {name:text,type:petChoice,emote:"happy"};
    	dispatch({type: CHANGE, changes: array});
    	dispatch({type: TIME_FEED_CHANGE, data: new Date()});
    	dispatch({type: TIME_CHANGE, data: new Date()});
    }

    const onChangeHandler = event => {
            onChangeText(event.target.value);

     };


    return (

        <View style={styles.container}>
            <Text style={styles.text}>Choose your pet</Text>
            <View style={styles.imageContainer}>
                <TouchableHighlight
					activeOpacity={0.6}
					style={{borderRadius: 5, margin: 20}}
					onPress={() => onPress("cat")}
					underlayColor='grey'
				>
					<View style={styles.imageContainer}>
						<Image id="cat"
						 style={{borderColor: colorImage1, borderRadius: 5, borderWidth: 5, height: 130, width: 130}}
						 source={require('../images/cat.png')}
						/>
					</View>
                </TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.6}
					style={{borderRadius: 5, margin: 20}}
					onPress={() => onPress("dog")}
					underlayColor="grey"
				>
					<View style={styles.imageContainer}>
						<Image id="dog"
							style={{borderColor: colorImage2, borderRadius: 5, borderWidth: 5, height: 130, width: 130}}
							source={require('../images/dog.png')}
						/>
					</View>
				</TouchableHighlight>
            </View>
            <Text style={[styles.text, {fontSize: 20}]}>Please enter a name for your pet</Text>

            <TextInput
				style={styles.input}
				placeholder="Your Pet's Name"
				onChangeText={text => onChangeText(text)}
				value={text}
            />
        <TouchableOpacity
			onPress={() => {submitData(); onSignUp();}}
			style={styles.button}
		>
			<Text style={{color: 'white', fontSize: 20}}>Submit</Text>
		</TouchableOpacity>


        </View>
    );
};

export default choosePetScreen;

