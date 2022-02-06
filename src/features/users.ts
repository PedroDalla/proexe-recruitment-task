import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";

let nextId = 0;

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] as User[] },
  reducers: {
    updateUsers: (state, action: { payload: User[]; type: string }) => {
      state.value = action.payload
    },

    addUser: (state, action: { payload: User; type: string }) => {
        if(nextId == 0) {
            nextId = state.value.length + 1
        } else {
            nextId++
        }
        
        state.value.push({...action.payload, id: nextId});
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
