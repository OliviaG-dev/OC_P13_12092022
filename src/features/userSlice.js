import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    token: null,
    isLoading: true,
  },
  reducers: {
    updateToken(state, action) {
      state.token = action.payload.token;
    },
    displayUser(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    disableLoader(state) {
      state.isLoading = false;
    },
  },
});

export const { updateToken, displayUser, logout, disableLoader } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
