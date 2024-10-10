import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormReducer";
import projectReducer from "./ProjectSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    project: projectReducer,
  },
});

export default store;
