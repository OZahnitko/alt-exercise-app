import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Exercise, Exercises } from "../contracts";

const initialState: Exercises = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setExercises: (state, { payload }: PayloadAction<Exercise[]>) => ({
      ...state,
      exercises: payload,
    }),
  },
});

export const { setExercises } = exercisesSlice.actions;

export default exercisesSlice.reducer;
