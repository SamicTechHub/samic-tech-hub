import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
// import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import storage from "reduxjs-toolkit-persist/lib/storage"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";


const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk],
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk)
    }
    // devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)