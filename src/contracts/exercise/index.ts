export interface Exercise {
  aoe: string[];
  defaultValues: ResistanceExerciseDefaultValues;
  name: string;
  type: string[];
}

export enum ExerciseType {
  resistance,
}

export interface ResistanceExerciseDefaultValues {
  weight: number;
}
