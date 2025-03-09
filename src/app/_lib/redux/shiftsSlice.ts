import { createSlice } from "@reduxjs/toolkit";

export const shiftsSlice = createSlice({
    name: "shifts",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    }
});

export const { increment } = shiftsSlice.actions;

export default shiftsSlice.reducer;