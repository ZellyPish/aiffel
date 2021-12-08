import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser } = actions;
export default reducer;
