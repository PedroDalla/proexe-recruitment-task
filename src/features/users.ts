import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] as User[] },
  reducers: {
    updateUsers: (state, action: { payload: User[]; type: string }) => {
      state.value = action.payload
    },

    addUser: (state, action: { payload: User; type: string }) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action: { payload: number; type: string }) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action: { payload: User; type: string }) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user
      });
    },
  },
});

export const { addUser, deleteUser, updateUser, updateUsers } = userSlice.actions;
