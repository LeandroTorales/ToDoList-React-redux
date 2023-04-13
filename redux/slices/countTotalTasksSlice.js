import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksTotal: 0,
};

const countTotalTasksSlice = createSlice({
  name: "totalTasksState",
  initialState: initialState,
  reducers: {
    countTotalTasks: (state) => {
      return {
        ...state,
        taskTotal: (textTotalTasks.innerHTML = `Tienes ${tasks.length} tareas en total`),
      };
    },
  },
});

export const { countTotalTasks } = countTotalTasksSlice.actions;
export default countTotalTasksSlice.reducer;


