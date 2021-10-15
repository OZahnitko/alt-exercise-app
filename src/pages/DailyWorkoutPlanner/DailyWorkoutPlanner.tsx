import { useState } from "react";
import { useSwipeable } from "react-swipeable";

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
  return (
    <ExerciseListContainer.Wrapper>
      {exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.name} />
      ))}
    </ExerciseListContainer.Wrapper>
  );
};

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwipedRight: () => setExpanded(() => true),
    onSwipedLeft: () => setExpanded(() => false),
  });

  const { addExercise, removeExercise, selectedWorkoutExercises } =
    useDailyWorkoutPlannerHooks();

  return (
    <ExerciseListContainer.Card
      expanded={expanded}
      onClick={() =>
        selectedWorkoutExercises.find((e) => e.name === exercise.name)
          ? removeExercise(exercise)
          : addExercise(exercise)
      }
      selected={
        !!selectedWorkoutExercises.find((e) => e.name === exercise.name)
      }
      {...handlers}
    >
      {expanded ? (
        <ExerciseCardExpandedContent exercise={exercise} />
      ) : (
        <h2>{exercise.name}</h2>
      )}
    </ExerciseListContainer.Card>
  );
};

export const ExerciseCardExpandedContent = ({
  exercise,
}: {
  exercise: Exercise;
}) => {
  return <div>Exercise Card Expanded Content for {exercise.name}</div>;
};
