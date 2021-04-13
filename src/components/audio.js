import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

import { useSelector } from 'react-redux';


const styles = StyleSheet.create({
button: {
        		borderRadius: 7,
        		width: 80,
        		alignItems: 'center',
        		padding: 10,
        		elevation: 2,
        		justifyContent: 'center',
        		flexDirection: 'row',
        	},
        	})




/*export function PlayingSound() {
  const [sound, setSound] = React.useState();*/




  // List of sound effect require statements.
  // Every time a new sound effect is added to the application,
  // a require statement needs to be added to this list


  //Both of these are imported into whichever module needs audio, and
  //an element from soundEffectList is passed as a parameter from the
  // calling component to playSound, in which it is played.

  // Unloading needs to happen here ASAP

  //I am going to make this better, i promise. But for now, its a working solution to
  //app-wide sound effects.


  //maybe store this in redux?
  export const soundEffectList = {
    food_sound: require('../components/food_sound.wav'),
    moo: require('../components/moo.wav'),
    something_old: require('../components/something_old.wav'),
    clothes_sound: require('../components/clothes_sound.wav')
  }



  export async function playSound(listItem) {

    const soundObj = new Audio.Sound();

    console.log('Loading Sound');
    await soundObj.loadAsync(

        listItem

    );



    console.log('Playing Sound');
    await soundObj.playAsync();

    //await soundObj.unloadAsync();
  }



  /*React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.button}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}*/

/*export function AudioPlayer() {}

AudioPlayer.playSound = async function (
  source,
  initialStatus = { shouldPlay: true },
  onPlaybackStatusUpdate = null,
  downloadFirst = true
) {
  try {
    // Create a complete sound object
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus,
      onPlaybackStatusUpdate,
      downloadFirst
    );

    console.log(status);

    // Play the sound
    await sound.playAsync();

    console.log("Sound played! Unloading from memory...");

    // We are done...
    // Unload the sound from memory
    sound.unloadAsync();
  } catch (err) {
    throw err;
  }
};*/
