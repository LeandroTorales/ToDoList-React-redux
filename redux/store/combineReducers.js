import { combineReducers } from "redux";
import countTotalTasksSlice from "../slices/countTotalTasksSlice";
import generateTasksSlice from "../slices/generateTasksSlice";

const reducers = combineReducers({
  generateTasksSlice: generateTasksSlice,
  countTotalTasksSlice: countTotalTasksSlice,
});

export default reducers;
