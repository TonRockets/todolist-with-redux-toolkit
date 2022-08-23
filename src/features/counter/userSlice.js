import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  users: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const { addTasks, addUsers } = userSlice.actions;

export default userSlice.reducer;
