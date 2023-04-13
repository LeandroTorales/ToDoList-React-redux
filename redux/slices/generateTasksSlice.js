import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wrapperTaskss: "",
};

const generateTasksSlice = createSlice({
  name: "generateTasks",
  initialState: initialState,
  reducers: {
    wrapperTasks: (state) => {
      return {
        ...state,
        wrapperTaskss: (wrapperTasks.innerHTML = tasks.map((task) => templateTask(task)).join("")),
      };
    },
  },
});

export const { wrapperTaskss } = generateTasksSlice.actions;
export default generateTasksSlice.reducer;
