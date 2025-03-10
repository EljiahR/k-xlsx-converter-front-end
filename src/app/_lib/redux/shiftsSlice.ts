import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";
import { CarSlotValueAction, CartSlotAction, CartSlotDragAction, GetEmployeeBreakAction, MinutesToBreakAction, SetMinutesToBreakAction, ShiftsState } from "./reduxTypes";
import { addMinutesToBreak } from "../helpers/timeFunctions";
import sortEmptyToEnd from "../helpers/sortEmptyToEnd";

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
        setShiftsNull: (state) => {
            state.value = null;
        },
        setNewShifts: (state, action: PayloadAction<IWeekdayBO[]>) => {
            state.value = action.payload;
        },
        addToBreak: (state, action: PayloadAction<MinutesToBreakAction>) => {
            const { day, jobPosition, breakType, minutesToAdd } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return

            const personToEdit = job.shifts.find(s => s.employeeId);
            if (!personToEdit) return;
            
            personToEdit[breakType].time = addMinutesToBreak(personToEdit[breakType].time, minutesToAdd)
        },
        changeBreak: (state, action: PayloadAction<SetMinutesToBreakAction>) => {
            const { day, jobPosition, breakType, minutesToChangeTo } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return

            const personToEdit = job.shifts.find(s => s.employeeId);
            if (!personToEdit) return;
            
            personToEdit[breakType].time = minutesToChangeTo;
        },
        toggleBreakEdit: (state, action: PayloadAction<GetEmployeeBreakAction>) => {
            const { day, jobPosition, breakType } = action.payload;

            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return

            const personToEdit = job.shifts.find(s => s.employeeId);
            if (!personToEdit) return;

            personToEdit[breakType].editable = !personToEdit[breakType].editable
        },
        toggleCartSlotEdit: (state, action: PayloadAction<CartSlotAction>) => {
            const { day, pos, index } = action.payload;
            let carts = state.value[day]?.carts;
            
            const wasEditable = carts[index][pos].editable;
            carts[index][pos].editable = !wasEditable;
            if (wasEditable) carts[index].sort(sortEmptyToEnd);
        },
        editCartSlot: (state, action: PayloadAction<CarSlotValueAction>) => {
            const { day, pos, index, newValue } = action.payload;
            let carts = state.value[day]?.carts;

            carts[index][pos].name = newValue;
            if (newValue == "") carts[index].sort(sortEmptyToEnd);
        },
        dragCartSlot: (state, action: PayloadAction<CartSlotDragAction>) => {
            const { day, pos, index, newValue, targetPos, targetIndex } = action.payload;
            let carts = state.value[day]?.carts;

            carts[targetIndex][targetPos].name = newValue;
            carts[index][pos].name = "";
            carts[targetIndex].sort(sortEmptyToEnd);
        }
    }
});

export const { setAsTest, setShiftsNull, setNewShifts, addToBreak, changeBreak, toggleBreakEdit, toggleCartSlotEdit, editCartSlot, dragCartSlot } = shiftsSlice.actions;

export default shiftsSlice.reducer;