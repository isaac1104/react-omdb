import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import omdbDataReducer from "./omdb_data_reducer";

const rootReducer = combineReducers({
  data: omdbDataReducer,
  form: formReducer
});

export default rootReducer;
