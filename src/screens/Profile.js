import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {CHANGE} from "../redux/petInfo";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#406BE9',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
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
        		padding: 8,
        		backgroundColor: "lightblue",
        		margin: 10
    },
    imageContainer: {
            flexDirection: 'row',
    		justifyContent: 'space-evenly',
    		marginTop: 20,
    		flexWrap: 'wrap',
    		alignContent: 'flex-end'
    },
    }
);


const PetProfile = ({choices, navigation}) => {

const dispatch = useDispatch();
const petImgChoice = useSelector(state => state.petDetails[1]);

console.log(petImgChoice);
console.log("HELLO");

const findImage = () => {
console.log(petImgChoice);
    	if (petImgChoice == "cat") {
    	    return require('../images/cat.png');
    	} else {
    	    return require('../images/dog.png');
    	}
    }

	return (

		<View style={styles.container}>
			<Text style={styles.text}>Pet Profile Screen</Text>
			<Text style={styles.text}>
			{useSelector(state => state.petDetails[0])}
			</Text>
			<View style={styles.imageContainer}>
            <Image id="img"
                style={{width: 100,height: 100,borderWidth: 5,borderRadius: 10}}
                source={(petImgChoice == "cat") ? require('../images/cat.png') : require('../images/dog.png')}
            />
            </View>

		</View>

	);
};

export default PetProfile;
