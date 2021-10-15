import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DailyWorkoutPlanner,
  Exercise,
  SelectedExerciseType,
  SelectedResistanceAOE,
} from "../contracts";

const initialState: DailyWorkoutPlanner = {
  selectedExerciseType: null,
  selectedResistanceAOE: null,
  selectedWorkoutExercises: [],
};

const dailyWorkoutPlannerSlice = createSlice({
  name: "dailyWorkoutPlanner",
  initialState,
  reducers: {
    addExercise: (state, { payload }: PayloadAction<Exercise>) => {
      if (
        !state.selectedWorkoutExercises.find(
          (exercise) => exercise.name === payload.name
        )
      ) {
        return {
          ...state,
          selectedWorkoutExercises: [
            ...state.selectedWorkoutExercises,
            payload,
          ],
        };
      } else {
        return state;
      }
    },
    removeExercise: (state, { payload }: PayloadAction<Exercise>) => ({
      ...state,
      selectedWorkoutExercises: [
        ...state.selectedWorkoutExercises.filter(
          (exercise) => exercise.name !== payload.name
        ),
      ],
    }),
    setSelectedExerciseType: (
      state,
      { payload }: PayloadAction<SelectedExerciseType>
    ) => ({ ...state, selectedExerciseType: payload }),
    setSelectedResistanceAOE: (
      state,
      { payload }: PayloadAction<SelectedResistanceAOE>
    ) => ({ ...state, selectedResistanceAOE: payload }),
  },
});

export const {
  addExercise,
  removeExercise,
  setSelectedExerciseType,
  setSelectedResistanceAOE,
} = dailyWorkoutPlannerSlice.actions;

export default dailyWorkoutPlannerSlice.reducer;
