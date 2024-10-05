import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  username?: string;
  email?: string;
  userId?: string;
  isLoggedIn: boolean;
}

const initialState: userState = {
  username: undefined,
  email: undefined,
  userId: undefined,
  isLoggedIn: false,
};

interface Loginpayload {
  username: string;
  email: string;
  userId: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<Loginpayload>) {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
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
