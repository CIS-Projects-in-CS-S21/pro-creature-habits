import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';




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

<<<<<<< HEAD
  const SoundContext = React.createContext();

  const SoundPlayer = () =>{

  
    const [sound, setSound] = React.useState('');
    const [location, setLocation] = React.useState('');
=======
  export async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../components/ra.wav')
    );
    setSound(sound);
>>>>>>> parent of 57339066 (Less broken (hopefully), tried to use redux so that current sound playing is a global variable across app. Plan on doing this for music, next)

    async function playSound (url) {
      
      setLocation(url);
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(

          require(location)
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync(); 
    }

    return(
      <SoundContext.Provider
        value={{
          sound,
          location
        }}
      ></SoundContext.Provider>
      
      
    )
  }
  export default SoundPlayer;

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