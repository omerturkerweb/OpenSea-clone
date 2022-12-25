import { configureStore } from "@reduxjs/toolkit";
import Home from "./Home";

export const store = configureStore({
  reducer: {
    home: Home,
  },
});
