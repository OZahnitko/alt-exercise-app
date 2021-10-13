import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: { app: appReducer, user: userReducer },
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
