import { createSlice } from "@reduxjs/toolkit";

// id: 0,
// email: "",
// fullName: "",
// type: "USER",
// isActive: true,
// createdAt: "",

const initialState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDataAction: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { userDataAction } = userSlice.actions;

export const selectUserData = (state) => state.userData;

export default userSlice.reducer;
