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

const PlayerObj = {
  playing = false,
  location = null
}

export {PlayerObj}

/*export function PlayingSound() {
  const [sound, setSound] = React.useState();*/

  export async function playSound(url) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require(url)
    );
    

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
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
}

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