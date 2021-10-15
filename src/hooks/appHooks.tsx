import { useAppDispatch, useAppSelector } from ".";
import { App } from "../contracts";
import { RootState, setInitializing, setSelectedDate } from "../store";

export const useAppHooks = () => {
  const dispatch = useAppDispatch();

  return {
    currentDate: useAppSelector(
      ({ app: { currentDate } }: RootState) => currentDate
    ),
    selectedDate: useAppSelector(
      ({ app: { selectedDate } }: RootState) => selectedDate
    ),
    setInitializing: (initializingState: App.Initializing) =>
      dispatch(setInitializing(initializingState)),
    setSelectedDate: (selectedDate: App.SelectedDate) =>
      dispatch(setSelectedDate(selectedDate)),
  };
};
