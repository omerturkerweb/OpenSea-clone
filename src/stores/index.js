import { configureStore } from "@reduxjs/toolkit";
import Home from "./Home";
import Collection from "./Collection";

export const store = configureStore({
  reducer: {
    home: Home,
    collection: Collection,
  },
});
