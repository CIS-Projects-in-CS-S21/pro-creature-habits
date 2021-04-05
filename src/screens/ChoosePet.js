import React from 'react';
import {Text, View, Button, StyleSheet, Image, TextInput, TouchableHighlight} from "react-native";
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





const choosePetScreen = ({onSignup, navigation}) => {
    const [text, onChangeText] = React.useState('');
    const [colorImage1, changeValue1] = React.useState('lightblue');
    const [colorImage2, changeValue2] = React.useState('lightblue');
    const [petChoice,changePet] = React.useState('');
    const dispatch = useDispatch();

    const onPress = (animal) => {

        if (animal === "cat") {
        changeValue1("orange");
        changeValue2("lightblue");
        changePet("cat");


        } else {
        changeValue2("orange");
            changeValue1("lightblue");
            changePet("dog");
        }
    }


    const submitData = () => {
         console.log("test");
         const array = [text,petChoice];
    	dispatch({type: CHANGE, changes: array});
    }

    const onChangeHandler = event => {
            onChangeText(event.target.value);

     };


    return (

        <View style={styles.container}>
            <Text style={styles.text}>Please choose your starter pet</Text>
            <View style={styles.imageContainer}>
                <TouchableHighlight activeOpacity={0.6} style={{borderRadius: 20}} onPress={() => onPress("cat")}>
                                <View style={styles.imageContainer}>
                                <Image id="cat"
                                 style={{borderColor: colorImage1,width: 100,height: 100,borderWidth: 5,borderRadius: 20}}
                                 source={require('../images/cat.png')}
                                />
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight activeOpacity={0.6} style={{borderRadius: 20}} onPress={() => onPress("dog")}>
                                <View style={styles.imageContainer}>
                                <Image id="dog"
                                    style={{borderColor: colorImage2,width: 100,height: 100,borderWidth: 5,borderRadius: 20}}
                                    source={require('../images/dog.png')}
                                />
                                </View>
                                </TouchableHighlight>
                                </View>

            <Text style={styles.text}>Please enter a name for your pet</Text>
            <View style={styles.imageContainer}>
            <TextInput
                            style={{
                                margin: 'auto',
                                height: 40,
                                width: 200,
                                borderColor: 'black',
                                backgroundColor: 'gray',
                                borderWidth: 1
                            }}
                            placeholder="Your Pet's Name"
                        onChangeText={text => onChangeText(text)}
                        value={text}
            />
        </View>
        <Button title="Submit" color="purple" onPress={() => {submitData(); navigation.navigate('App Tutorial');}}/>

        </View>
    );
};

export default choosePetScreen;

