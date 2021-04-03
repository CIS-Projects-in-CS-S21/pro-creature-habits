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



    

          

    async function playSound(url) {
      const [sound, setSound] = React.useState();

    
      console.log('Loading Sound');
      const { soundProto } = await Audio.Sound.createAsync(
        {uri: url},
        {shouldPlay: true}
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync(); 
    

      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    }
    export {playSound};
  /*return (
    <View style={styles.button}>
      <Button title="Play Sound" onPress={playSound} />
    </View> 
  ) */


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