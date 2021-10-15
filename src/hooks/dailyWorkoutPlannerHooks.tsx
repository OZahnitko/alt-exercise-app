import { useAppDispatch, useAppSelector } from ".";
import {
  Exercise,
  SelectedExerciseType,
  SelectedResistanceAOE,
} from "../contracts";
import {
  addExercise,
  removeExercise,
  setSelectedExerciseType,
  setSelectedResistanceAOE,
} from "../store";

export const useDailyWorkoutPlannerHooks = () => {
  const dispatch = useAppDispatch();

  return {
    addExercise: (exercise: Exercise) => dispatch(addExercise(exercise)),
    removeExercise: (exercise: Exercise) => dispatch(removeExercise(exercise)),
    selectedExerciseType: useAppSelector(
      ({ dailyWorkoutPlanner: { selectedExerciseType } }) =>
        selectedExerciseType
    ),
    selectedResistanceAOE: useAppSelector(
      ({ dailyWorkoutPlanner: { selectedResistanceAOE } }) =>
        selectedResistanceAOE
    ),
    selectedWorkoutExercises: useAppSelector(
      ({ dailyWorkoutPlanner: { selectedWorkoutExercises } }) =>
        selectedWorkoutExercises
    ),
    setSelectedExerciseType: (selectedExerciseType: SelectedExerciseType) =>
      dispatch(setSelectedExerciseType(selectedExerciseType)),
    setSelectedResistanceAOE: (
      selectedResistanceExerciseAOE: SelectedResistanceAOE
    ) => dispatch(setSelectedResistanceAOE(selectedResistanceExerciseAOE)),
  };
};
