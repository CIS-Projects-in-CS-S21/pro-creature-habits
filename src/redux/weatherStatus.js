export const SET_WEATHER = 'SET_WEATHER';



const weatherStatusReducer = (state = "null", action) => {
  switch (action.type){
    case SET_WEATHER:
      state = action.status;
      return state;

    default:
      return state;

  }
}

export default weatherStatusReducer;
