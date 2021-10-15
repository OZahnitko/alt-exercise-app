import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { Exercise } from "../../contracts";
import { useExercisesHooks, useDailyWorkoutPlannerHooks } from "../../hooks";
import { ExerciseListContainer, Wrapper } from "./Styles";
import { formatExerciseName } from "../../utility";

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
      {exercises.map((exercise, index) => (
        <ExerciseCard exercise={exercise} index={index} key={exercise.name} />
      ))}
    </ExerciseListContainer.Wrapper>
  );
};

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export const ExerciseCard = ({ exercise, index }: ExerciseCardProps) => {
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
      index={index}
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
        <h2>{formatExerciseName(exercise.name)}</h2>
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
