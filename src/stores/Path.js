import { createSlice } from "@reduxjs/toolkit";

export const Path = createSlice({
  name: "path",
  initialState: {
    path: "/",
  },
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setPath } = Path.actions;
export default Path.reducer;
