import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import { App } from "../contracts";

export const initialState: App.AppState = {
  currentDate: DateTime.now().toISO(),
  initializing: true,
  selectedDate: DateTime.now().toISO(),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitializing: (state, { payload }: PayloadAction<App.Initializing>) => ({
      ...state,
      initializing: payload,
    }),
  },
});

export const { setInitializing } = appSlice.actions;

export default appSlice.reducer;
