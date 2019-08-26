import axios from 'axios'

const initialState = {
  allCandies: []
}

//ACTION TYPES
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES';

//ACTION CREATORS
//just a func that returns an obj
const gotAllCandies = (candies) => ({
  type: GOT_ALL_CANDIES,
  candies: candies
})

//THUNK CREATOR
// function that returns a function
// Use Thunk for aync calls
export const getAllCandies = () => async (dispatch) => {
  const response = await axios.get('/api/candies');
  const data = response.data;
  // const {data} = await axios.get('/api/candies');
  dispatch(gotAllCandies(data));
}

//single reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return {...state, allCandies: action.candies}
    default:
      return state
  }
}

export default rootReducer
