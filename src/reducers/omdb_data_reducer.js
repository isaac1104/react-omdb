import { FETCH_OMDB_DATA, FETCH_DATA_FAIL } from "./../actions/types";

const initialState = {
  data: [],
  isFound: null
}

function omdbDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_OMDB_DATA:
      return {
        ...state,
        data: action.payload,
        isFound: true
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isFound: false
      };
    default:
      return state;
  }
}

export default omdbDataReducer;
