import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoStore";

const createReducer = combineReducers({
  todoSlice,
});

export default createReducer;
