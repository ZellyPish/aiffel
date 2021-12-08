import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'forum',
  initialState: [],
  reducers: {
    setForumList: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});

const { actions, reducer } = userSlice;
export const { setForumList } = actions;
export default reducer;
