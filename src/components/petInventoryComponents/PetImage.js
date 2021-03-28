import React from "react";
import {Image, Text, View, StyleSheet,ImageBackground} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ImageOverlay from "react-native-image-overlay";

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
    const petImgChoice = useSelector(state => state.petDetails[1]);
    const items = useSelector(state => state.petInv);
	let names = [];
for (const [key, value] of Object.entries(items)) {
  if (items[key].wear) {
    names.push(key);
  }
}

	return (
	<View>
		<Image
                        style={{width: 150,height: 150,borderWidth: 5,borderRadius: 10}}
                        source={(petImgChoice == "cat") ? require('../../images/cat.png') : require('../../images/dog.png')}
         />
         {names.map((name, index) => {
         return (
           <Image
           style={{width: 150,height: 150,borderWidth: 5,borderRadius: 10,position:'absolute'}}
                                   source = {items[name].wearUri}
                                   key = {name}
           />
           )
            })}
           </View>
	)
}

export default PetImage;