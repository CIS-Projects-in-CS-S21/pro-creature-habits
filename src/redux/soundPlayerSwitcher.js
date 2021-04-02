import {PlayingSound, PlayerObj, playSound} from '../components/audio.js';
export const SOUND_LOCATION = 'SOUND_LOCATION';
export const PLAY = 'play';


const soundSwitcherReducer = (state = PlayerObj, action) => {
    switch(action.type){
        case SOUND_LOCATION:
            state.location = action.location;
            return state.location;

        /*case PLAY:
            playSound(state.location);
            state.playing = true;
            return state.playing;*/
    }
}

export default soundSwitcherReducer;