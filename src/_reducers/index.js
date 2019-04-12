import { combineReducers } from "redux";
import notesReducer from "./notes.reducer";
import tagsReducer from "./tags.reducer";

export default combineReducers({
  notes: notesReducer,
  tags: tagsReducer
});
