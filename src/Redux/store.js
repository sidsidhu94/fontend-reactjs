import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apislice";
import userReducer from "./userslice";


const store = configureStore({
    reducer : {
        user:userReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store
