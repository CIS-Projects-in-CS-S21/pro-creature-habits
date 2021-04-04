
export const SOUND_LOCATION = 'SOUND_LOCATION';

/*const PlayerObj = {
    location: '',
    playing: false
};

const obj = new PlayerObj;
*/
const soundEffectPlayer = (state = " ", action) => {
    switch(action.type){
        case SOUND_LOCATION:
            state = action.location;
            return state;

        /*case PLAY:
            
            state.playing = true;
            return state.playing;
        */
        default:
            return state;
    }


}

export default soundEffectPlayer;