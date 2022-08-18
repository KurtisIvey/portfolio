import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    current: "home",
  },
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    },
  },
});

export const activePageSliceActions = activePageSlice.actions;
export default activePageSlice;
