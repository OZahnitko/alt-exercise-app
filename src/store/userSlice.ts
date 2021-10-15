import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../contracts";

export const initialState: User.UserState = { username: undefined };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<User.Username>) => ({
      ...state,
      username: payload,
    }),
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
