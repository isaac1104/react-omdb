import { FETCH_OMDB_DATA, FETCH_DATA_FAIL, INIT_LOADING } from "./../actions/types";

const initialState = {
  data: [],
  isFound: null,
  isLoading: false
}

function omdbDataReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_OMDB_DATA:
      return {
        ...state,
        data: action.payload,
        isFound: true,
        isLoading: false
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isFound: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export default omdbDataReducer;
