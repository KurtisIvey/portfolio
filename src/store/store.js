import { configureStore } from "@reduxjs/toolkit";
import activePageSlice from "./slices/activePageSlice";

export const store = configureStore({
  reducer: {
    activePage: activePageSlice.reducer,
  },
});
