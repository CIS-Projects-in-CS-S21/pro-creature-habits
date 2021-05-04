import React, { useRef } from "react";
import {Image, Text, View, StyleSheet,ImageBackground, Animated} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ImageOverlay from "react-native-image-overlay";
import {EAT} from "../../redux/petInventory";
import {CHANGE_EMOTION} from "../../redux/petInfo";



const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 2,
		padding: 8,
		backgroundColor: 'rgba(49,69,194,0.7)',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 3,
		elevation: 11
	},
	circle: {
       width: 20,
       height: 20,
       borderRadius: 10,
       color: 'white',
       borderWidth: 1,
       borderColor: 'white',
       borderStyle: 'solid',
       textAlign: "center",
       fontWeight: 'bold'
    },
	itemImage: {
		width:75,
		height:75,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 3,
	},
	overlay: {
          width: 150,height: 150,borderWidth: 5,borderRadius: 10,
        }
});

const PetImage = (props) => {

    const dispatch = useDispatch();

    const petImgChoice = useSelector(state => state.petDetails.type);
	const petEmote = useSelector(state => state.petDetails.emote);
	const weatherStatus = useSelector(state => state.weatherStatus);


    const items = useSelector(state => state.petInv);
	let names = [];
    for (const [key, value] of Object.entries(items)) {
        if (items[key].wear) {
            names.push(key);
        }

    }


const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 5000
        }).start();
    };

    const hunger = useSelector(state => state.hunger);
        const hygiene = useSelector(state => state.hygiene);
        const fun = useSelector(state => state.fun);
        if (hunger > 7 && hygiene > 7 && fun > 7) {
            dispatch({type: CHANGE_EMOTION,changes:"happy"});
        } 
		if(hunger <= 3 && hygiene <= 3 && fun <= 3){
			dispatch({type: CHANGE_EMOTION, changes: "sad"});
		}
		else {
            dispatch({type: CHANGE_EMOTION,changes:"neutral"});
        }

const EmoteImg = () => {

	const petEmoteTest = "happy";
	switch(petEmote){
		case "happy":
			if(petImgChoice == "cat"){
				return(
					<Image
												style = {{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
												source={require("../../images/cat_happy.gif")}
												
				  />
				)
	
			}
			if(petImgChoice == "dog"){
				return(
					<Image
												style = {{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
												source={require("../../images/dog_happy.gif")}
												
					/>
				)
			}
		
		case "neutral":
			if(petImgChoice == "cat"){
				return(
					<Image
											style={{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
											source={require("../../images/cat.png")}
											
					/>
				)
			}
			if(petImgChoice == "dog"){
				return(
					<Image
											style={{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
											source={require("../../images/dog.png")}
											
					/>
				)
			}
		case "sad":
			if(petImgChoice == "cat"){
				return(
					<Image
											style={{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
											source={require("../../images/cat_sad.gif")}
											
					/>
				)
			}
			if(petImgChoice == "dog"){
				return(
					<Image
											style={{width: 150, height: 150, borderWidth: 5, borderRadius: 10}}
											source={require("../../images/dog_sad.gif")}
											
					/>
				)
			}
	}
}

const WeatherImg = () => {
	const weatherStatusTest = "Thunderstorm";
	
	
	switch(weatherStatus){
		case "Rain":
			return(
				<Image
					 		style={{width: 150,height: 150, position:'absolute'}}
							source={require('../../images/rain.gif')}
							cacheKey={"rainKey"}
					 />
			);
		case "Clouds":
			return(
				<Image
					 		style={{width: 150,height: 150, position:'absolute'}}
							source={require('../../images/clouds_trans.gif')}
					 		
					 />
			)
		case "Thunderstorm":
			return(
			<View style={{width: 150, height: 150, position: 'absolute'}}>
				<Image
					 		style={{width: 150,height: 150, position:'absolute'}}
							source={ require('../../images/thunder_trans.gif')}
							
					 />
				<Image
					 		style={{width: 150,height: 150, position:'absolute'}}
							source={require('../../images/rain.gif')}
							
					 />
			</View>
				
			)
		default:
			return( null )
	}
}



	return (
	<View>
		<EmoteImg />
         {names.map((name, index) => {
         return (
           <Image
           style={{width: 150,height: 150,borderWidth: 5,borderRadius: 10,position:'absolute'}}
                                   source = {items[name].wearUri}
                                   key = {name}
           />
           )})}
		<WeatherImg />
					 

       </View>
	)
}

export default PetImage;
