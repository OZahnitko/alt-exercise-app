import { Exercise } from "..";

export interface DailyWorkoutPlanner {
  selectedExerciseType: SelectedExerciseType;
  selectedResistanceAOE: SelectedResistanceAOE;
  selectedWorkoutExercises: SelectedWorkoutExercises;
}

export type SelectedExerciseType = string | null;

export type SelectedResistanceAOE = string | null;

export type SelectedWorkoutExercises = Exercise[];
