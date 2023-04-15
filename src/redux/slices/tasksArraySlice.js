import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  countTotalTasks: 0,
  inputValue: "",
};

const tasksArraySlice = createSlice({
  name: "tasksSlice",
  initialState: initialState,
  reducers: {
    tasksArrayCleanAction: (state) => {
      return { ...state, tasks: initialState.tasks };
    },
    tasksCountTotalAction: (state) => {
      return { ...state, countTotalTasks: state.tasks.length };
    },
    handleInputAction: (state, action) => {
      return { ...state, inputValue: action.payload };
    },
    putTasksInArrayAction: (state, action) => {
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    deleteTaskAction: (state, action) => {
      return { ...state, tasks: action.payload };
    },
  },
});

export const {
  tasksArrayCleanAction,
  tasksCountTotalAction,
  tasksShowArrayAction,
  handleInputAction,
  putTasksInArrayAction,
  deleteTaskAction,
} = tasksArraySlice.actions;
export default tasksArraySlice.reducer;
