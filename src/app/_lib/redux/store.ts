import { configureStore } from "@reduxjs/toolkit";
import shiftsReducer from "./shiftsSlice";
import dayReducer from "./daySlice";

const store = configureStore({
    reducer: {
        shifts: shiftsReducer,
        day: dayReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;