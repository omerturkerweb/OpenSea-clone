import { configureStore } from "@reduxjs/toolkit";
import Home from "./Home";
import Collection from "./Collection";
import Path from "./Path";
import Explore from "./Explore";

export const store = configureStore({
  reducer: {
    home: Home,
    collection: Collection,
    path: Path,
    explore: Explore,
  },
});
