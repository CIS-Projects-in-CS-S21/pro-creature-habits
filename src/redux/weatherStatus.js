export const SET_WEATHER = 'SET_WEATHER';



const weatherStatusReducer = (state = "Clear", action) => {
  switch (action.type){
    case SET_WEATHER:
      return action.status;
    default:
      return state;

  }
}

export default weatherStatusReducer;
