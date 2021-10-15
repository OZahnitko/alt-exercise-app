import { useEffect, useState } from "react";

import { useDailyWorkoutPlannerHooks, useExercisesHooks } from "../../hooks";
import { CategoryChipContainer, Wrapper } from "./Styles";
import {
  fetchLocalStorageExercises,
  reduceUniqueExerciseAreasOfEffect,
  reduceUniqueExerciseTypes,
} from "../../utility";

const ExerciseCategoriesPicker = () => {
  const [exerciseAreas, setExerciseAreas] = useState<string[]>([]);
  const [exerciseTypes, setExerciseTypes] = useState<string[]>([]);

  const { selectedExerciseType, selectedResistanceAOE } =
    useDailyWorkoutPlannerHooks();
  const { exercises, setExercises } = useExercisesHooks();

  const handleLoadExerciseList = async () => {
    const exercises = await fetchLocalStorageExercises();

    setExercises(exercises);
    setExerciseTypes(() => reduceUniqueExerciseTypes(exercises));
  };

  useEffect(() => {
    handleLoadExerciseList();
  }, []);

  useEffect(() => {
    if (exercises && selectedExerciseType) {
      const areas = reduceUniqueExerciseAreasOfEffect(
        exercises,
        selectedExerciseType
      );
      setExerciseAreas(() => areas);
    }
  }, [exercises, selectedExerciseType]);

  return (
    <>
      <Wrapper>
        {[...exerciseTypes]
          .filter((type) =>
            selectedExerciseType ? type === selectedExerciseType : type
          )
          .map((category) => (
            <CategoryChip category={category} key={category} />
          ))}
        {selectedExerciseType === "resistance"
          ? exerciseAreas
              .filter((aoe) =>
                selectedResistanceAOE ? aoe === selectedResistanceAOE : aoe
              )
              .map((area) => <ResistanceAOEChip areaName={area} key={area} />)
          : null}
      </Wrapper>
    </>
  );
};

export default ExerciseCategoriesPicker;

interface CategoryChipProps {
  category: string;
}

export const CategoryChip = ({ category }: CategoryChipProps) => {
  const { selectedExerciseType, setSelectedExerciseType } =
    useDailyWorkoutPlannerHooks();

  return (
    <CategoryChipContainer.Wrapper
      selected={selectedExerciseType === category}
      onClick={() =>
        setSelectedExerciseType(selectedExerciseType ? null : category)
      }
    >
      <h3>{category.toLowerCase()}</h3>
    </CategoryChipContainer.Wrapper>
  );
};

export const ResistanceAOEChip = ({ areaName }: { areaName: string }) => {
  const {
    selectedWorkoutExercises,
    selectedResistanceAOE,
    setSelectedResistanceAOE,
  } = useDailyWorkoutPlannerHooks();

  return (
    <CategoryChipContainer.Wrapper
      included={Array.from(
        new Set(
          selectedWorkoutExercises.reduce(
            (acc, exercise) => [...acc, ...exercise.aoe],
            [] as string[]
          )
        )
      ).includes(areaName)}
      onClick={() =>
        setSelectedResistanceAOE(selectedResistanceAOE ? null : areaName)
      }
      selected={areaName === selectedResistanceAOE}
    >
      <h3>{areaName.toLowerCase()}</h3>
    </CategoryChipContainer.Wrapper>
  );
};
