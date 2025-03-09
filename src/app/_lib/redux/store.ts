import { configureStore } from "@reduxjs/toolkit";
import shiftsReducer from "./shiftsSlice"

export default configureStore({
    reducer: {
        shifts: shiftsReducer
    },
})