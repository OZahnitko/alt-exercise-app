import { Exercise } from "../contracts";

export const reduceUniqueExerciseAreasOfEffect = (
  exercises: Exercise[],
  type: string
): string[] => {
  const targetAreasOfEffect = exercises
    .filter((exercise) => exercise.type.includes(type))
    .reduce((acc, exercise) => [...acc, ...exercise.aoe], [] as string[]);

  return Array.from(new Set(targetAreasOfEffect)).sort((a, b) =>
    a.localeCompare(b)
  );
};

export const reduceUniqueExerciseTypes = (exercises: Exercise[]): string[] => {
  const allExerciseTypes = exercises.reduce(
    (acc, exercise) => [...acc, ...exercise.type],
    [] as string[]
  );

  return Array.from(new Set(allExerciseTypes)).sort((a, b) =>
    a.localeCompare(b)
  );
};

export const formatExerciseName = (exerciseName: string) => {
  return exerciseName
    .toLowerCase()
    .split(" ")
    .map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
    .join(" ");
};
