import axios from "axios";
import { FETCH_OMDB_DATA, FETCH_DATA_FAIL, INIT_LOADING } from "./types";

export const getOmdbData = (title) => async dispatch => {
  const key = "ac19108c";
  const request = await axios.get(`https://www.omdbapi.com/?apikey=${key}&t=${title}`);
  const { data } = request;
  if (data.Error) {
    dispatch({ type: FETCH_DATA_FAIL, payload: false });
  } else {
    dispatch({ type: FETCH_OMDB_DATA, payload: data });
  }
}

export const initLoading = () => {
  return {
    type: INIT_LOADING,
    payload: true
  }
}
