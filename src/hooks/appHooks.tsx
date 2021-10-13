import { useAppDispatch, useAppSelector } from ".";
import { setInitializing } from "../store";

export const useAppHooks = () => {
  const dispatch = useAppDispatch();

  const state = useAppSelector(({ app }) => app);

  return {
    setInitializing: (initializingState: boolean) =>
      dispatch(setInitializing(initializingState)),
    state,
  };
};
