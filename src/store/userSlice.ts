import { createSlice } from "@reduxjs/toolkit";
import { loggedUser } from "../models/User";

export interface appState {
  currentUser: loggedUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: appState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    registerStart(state) {
      state.loading = true;
    },
    registerSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    registerFail(state, action) {
      (state.loading = false), (state.error = action.payload);
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerSuccess,
  registerFail,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
