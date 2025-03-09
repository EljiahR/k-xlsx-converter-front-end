import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";

interface ShiftsState {
    value: IWeekdayBO[]
}

const initialState: ShiftsState = {
    value: null
};

export const shiftsSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {
        setAsTest: (state) => {
            state.value = cloneDeep(expectedOutput);
        },
        reset: (state) => {
            state.value = null;
        },
        setNewShifts: (state, action: PayloadAction<IWeekdayBO[]>) => {
            state.value = action.payload;
        }
    }
});

export const { setAsTest } = shiftsSlice.actions;

export default shiftsSlice.reducer;