import { combineReducers } from "@reduxjs/toolkit";
import tasksArraySlice from "../slices/tasksArraySlice";
import randomNumberGeneratorSlice from "../slices/randomNumberGeneratorSlice";

const reducers = combineReducers({
  tasksArraySlice: tasksArraySlice,
  randomNumberGeneratorSlice: randomNumberGeneratorSlice,
});

export default reducers;
