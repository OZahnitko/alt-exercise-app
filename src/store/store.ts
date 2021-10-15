import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import dailyWorkoutPlannerReducer from "./dailyWorkoutPlannerSlice";
import exercisesReducer from "./exercisesSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    dailyWorkoutPlanner: dailyWorkoutPlannerReducer,
    exercises: exercisesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
