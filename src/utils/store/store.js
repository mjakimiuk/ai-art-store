import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice.feature";
import userReducer from "../../features/user/userSlice.feature";
import categoriesReducer from "../../features/categories/categoriesSlice.feature";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
