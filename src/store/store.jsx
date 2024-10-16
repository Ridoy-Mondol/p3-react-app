import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use the local storage as the default
import formReducer from "./FormReducer";
import projectReducer from "./ProjectSlice";
import { combineReducers } from "redux";

// Create a persist config
const persistConfig = {
  key: "root", // Key for the root level of the state
  storage, // Default storage method
};

// Combine the reducers
const rootReducer = combineReducers({
  form: formReducer,
  project: projectReducer,
});

// Create a persisted reducer using the persist config and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Create a persistor that triggers persistence
export const persistor = persistStore(store);

export default store;

