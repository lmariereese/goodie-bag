
const initialState = {
  candies: []
}

const GET_CANDIES = 'GET_CANDIES';

export const getCandies = (candies) => ({
  type: GET_CANDIES,
  candies
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {...state, candies: [...action.candies]}
    default:
      return state
  }
}

export default rootReducer
