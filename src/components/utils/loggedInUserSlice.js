import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";
const initialLoginState =
  isBrowser && localStorage.getItem("isLoggedInUser") === "true";

const loggedInUserSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedInUser: initialLoginState,
  },
  reducers: {
    changeLoggedInUser: (state, action) => {
      state.isLoggedInUser = action.payload;
      if (isBrowser) {
        localStorage.setItem("isLoggedInUser", action.payload);
      }
    },
  },
});

export const { changeLoggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
