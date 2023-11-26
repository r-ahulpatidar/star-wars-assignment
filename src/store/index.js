import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

// mount it on the Store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
