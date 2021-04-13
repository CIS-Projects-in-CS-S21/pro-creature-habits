export const SET = 'SET';



const weatherStatusReducer = (state = "null", action) => {
  switch (action.type){
    case SET:
      state = action.status;
      return state;

    default:
      return state;

  }
}

export default weatherStatusReducer;
