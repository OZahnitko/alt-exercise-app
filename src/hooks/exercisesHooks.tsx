import { useAppDispatch, useAppSelector } from ".";
import { Exercise } from "../contracts";
import { setExercises } from "../store";

export const useExercisesHooks = () => {
  const dispatch = useAppDispatch();

  return {
    exercises: useAppSelector(({ exercises: { exercises } }) => exercises),
    setExercises: (exercises: Exercise[]) => dispatch(setExercises(exercises)),
  };
};
