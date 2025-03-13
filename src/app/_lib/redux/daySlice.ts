import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DaysState } from "./reduxTypes";

const initialState: DaysState = {
    value: 0
}

export const daySlice = createSlice({
    name: "day",
    initialState,
    reducers: {
        setDay: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});

export const { setDay } = daySlice.actions;
export default daySlice.reducer;
