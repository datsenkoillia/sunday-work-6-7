import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    delUser: (state, { payload }) => {
      state.users = state.users.filter(({ id }) => id !== payload);
    },
  },
});

export const { addUser, delUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
