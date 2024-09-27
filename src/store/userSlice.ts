import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  username?: string;
  email?: string;
  isLoggedIn: boolean;
}

const initialState: userState = {
  username: undefined,
  email: undefined,
  isLoggedIn: false,
};

interface Loginpayload {
  username: string;
  email: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<Loginpayload>) {
      state.username = action.payload.username;
      state.email = action.payload.username;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.username = undefined;
      state.email = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
