import { Exercise } from "../../contracts";
import { useExercisesHooks, useDailyWorkoutPlannerHooks } from "../../hooks";
import { ExerciseListContainer, Wrapper } from "./Styles";

const DailyWorkoutPlanner = () => {
  const { selectedResistanceAOE, selectedExerciseType } =
    useDailyWorkoutPlannerHooks();
  const { exercises } = useExercisesHooks();

  return (
    <Wrapper>
      {selectedExerciseType && selectedResistanceAOE ? (
        <ExerciseList
          exercises={exercises.filter(
            (exercise) =>
              exercise.type.includes(selectedExerciseType) &&
              exercise.aoe.includes(selectedResistanceAOE)
          )}
        />
      ) : (
        <div>The Actual Planner</div>
      )}
    </Wrapper>
  );
};

export default DailyWorkoutPlanner;

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  const { addExercise, removeExercise, selectedWorkoutExercises } =
    useDailyWorkoutPlannerHooks();

  return (
    <ExerciseListContainer.Wrapper>
      {exercises.map((exercise) => (
        <ExerciseListContainer.Card
          key={exercise.name}
          onClick={() =>
            selectedWorkoutExercises.find((e) => e.name === exercise.name)
              ? removeExercise(exercise)
              : addExercise(exercise)
          }
        >
          <ExerciseCard exercise={exercise} />
        </ExerciseListContainer.Card>
      ))}
    </ExerciseListContainer.Wrapper>
  );
};

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return <div>{exercise.name}</div>;
};
