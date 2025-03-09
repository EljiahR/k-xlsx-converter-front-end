import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";
import { MinutesToBreakAction, ShiftsState } from "./reduxTypes";
import { addMinutesToBreak, timeIsLaterThan } from "../helpers/timeFunctions";

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
        },
        addMinutesToBreak: (state, action: PayloadAction<MinutesToBreakAction>) => {
            const { day, jobPosition, breakType, minutesToAdd } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return

            const personToEdit = job.shifts.find(s => s.employeeId);
            if (!personToEdit) return;
            
            personToEdit[breakType].time = addMinutesToBreak(personToEdit[breakType].time, minutesToAdd)
        }
    }
});

export const { setAsTest } = shiftsSlice.actions;

export default shiftsSlice.reducer;