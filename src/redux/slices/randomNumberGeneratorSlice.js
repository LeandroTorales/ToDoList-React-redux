import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numbers: [],
};

const randomNumberGeneratorSlice = createSlice({
  name: "randomNumberGenerator",
  initialState: initialState,
  reducers: {
    randomNumberGeneratorAction: (state, action) => {
      return { ...state, numbers: [...state.numbers, action.payload] };
    },
    resetRandoNumberArrayAction: (state) => {
      return { ...state, numbers: initialState.numbers };
    },
    deleteNumberGenerado: (state, action) => {
      return { ...state, numbers: action.payload };
    },
  },
});

export const { randomNumberGeneratorAction, resetRandoNumberArrayAction, deleteNumberGenerado } =
  randomNumberGeneratorSlice.actions;
export default randomNumberGeneratorSlice.reducer;
