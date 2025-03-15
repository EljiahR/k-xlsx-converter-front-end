import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";
import { CartSlotValueAction, CartSlotAction, CartSlotDragAction, GetEmployeeBreakAction, MinutesToBreakAction, ShiftsState, GetEmployeeBreakToggleAction, ChangeBreakAction } from "./reduxTypes";
import { addMinutesToBreak, getDatesFromBreaks, timeIsLaterThan } from "../helpers/timeFunctions";
import sortEmptyToEnd from "../helpers/sortEmptyToEnd";
import { ISelectedTime } from "../types/boardTypes";
import moment from "moment";
import { KeyboardEvent } from "react";

const initialState: ShiftsState = {
    value: null,
    selectedTime: {
        time: "",
        section: "",
        time15: "",
        timeMinus15: "",
    },
    day: 0
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
        addToBreak: (state, action: PayloadAction<{ e: KeyboardEvent<HTMLInputElement>, employee: IEmployeeBO, jobPosition: string, breakType: string, section: string }>) => {
            const { e, employee, jobPosition, breakType, section } = action.payload;
            if ((e.key != "ArrowUp" && e.key != "ArrowDown") && e.currentTarget.value == "") {
                return;
            }
            
            const job = state.value[state.day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return;

            const personToEdit = employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
                job.shifts.find(s => s.employeeId == employee.employeeId)
                : job.shifts.find(s => s.firstName == employee.firstName && s.lastName == employee.lastName)
            if (!personToEdit){
                console.log("No person")
                return;
            }

            const newTime = addMinutesToBreak(personToEdit[breakType].time, e.key == "ArrowUp" ? 15 : -15);
            
            if (timeIsLaterThan(newTime, personToEdit.shiftStart, true) && timeIsLaterThan(personToEdit.shiftEnd, newTime)) {
                personToEdit[breakType].time = addMinutesToBreak(personToEdit[breakType].time, newTime)
                state.selectedTime = {
                    time: newTime,
                    section,
                    time15: addMinutesToBreak(
                      newTime,
                      breakType == "lunch" ? 15 : 0,
                    ),
                    timeMinus15: addMinutesToBreak(newTime, -15),
                }
            }

        },
        changeBreak: (state, action: PayloadAction<{ employee: IEmployeeBO, jobPosition: string, breakType: string, minutesToChangeTo: string }>) => {
            const { employee, jobPosition, breakType, minutesToChangeTo } = action.payload;
            
            const job = state.value[state.day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return;

            const personToEdit = employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
                job.shifts.find(s => s.employeeId == employee.employeeId)
                : job.shifts.find(s => s.firstName == employee.firstName && s.lastName == employee.lastName)
            if (!personToEdit){
                console.log("No person")
                return;
            }
            
            personToEdit[breakType].time = minutesToChangeTo;
        },
        toggleBreakEdit: (state, action: PayloadAction<{employee: IEmployeeBO, jobPosition: string, breakType: string, section: string, isEditable: boolean}>) => {
            const { employee, jobPosition, breakType, section, isEditable } = action.payload;
            
            const job = state.value[state.day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) {
                console.log("No job")
                return;
            }

            const personToEdit = employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
                job.shifts.find(s => s.employeeId == employee.employeeId)
                : job.shifts.find(s => s.firstName == employee.firstName && s.lastName == employee.lastName)
            if (!personToEdit){
                console.log("No person")
                return
            }
            const time = employee[breakType].time;
            const time15 = breakType == "lunch" ? moment(getDatesFromBreaks(time, 15)).format("LT") : time;
                
            const timeMinus15 = moment(getDatesFromBreaks(time, -15)).format("LT");

            personToEdit[breakType].editable = isEditable;
            state.selectedTime = { time, section, time15, timeMinus15 };
        },
        toggleCartSlotEdit: (state, action: PayloadAction<CartSlotAction>) => {
            const { pos, index } = action.payload;
            let carts = state.value[state.day]?.carts;
            
            const wasEditable = carts[index][pos].editable;
            carts[index][pos].editable = !wasEditable;
            if (wasEditable) carts[index].sort(sortEmptyToEnd);
        },
        editCartSlot: (state, action: PayloadAction<CartSlotValueAction>) => {
            const { pos, index, newValue } = action.payload;
            let carts = state.value[state.day]?.carts;

            carts[index][pos].name = newValue;
            if (newValue == "") carts[index].sort(sortEmptyToEnd);
        },
        dragCartSlot: (state, action: PayloadAction<CartSlotDragAction>) => {
            const { pos, index, newValue, targetPos, targetIndex } = action.payload;
            let carts = state.value[state.day]?.carts;
            
            carts[targetIndex][targetPos].name = newValue;
            carts[index][pos].name = "";
            if (carts[index][pos].editable) {
                carts[index][pos].editable = false; 
            }
            carts[index].sort(sortEmptyToEnd);
            carts[targetIndex].sort(sortEmptyToEnd);
        },
        setDay: (state, action :PayloadAction<number>) => {
            state.day = action.payload;
        },
        setSelectedTime: (state, action: PayloadAction<ISelectedTime>) => {
            state.selectedTime = action.payload;
        }
    }
});

export const { setAsTest, setShiftsNull, setNewShifts, addToBreak, changeBreak, toggleBreakEdit, toggleCartSlotEdit, editCartSlot, dragCartSlot, setDay, setSelectedTime } = shiftsSlice.actions;

export default shiftsSlice.reducer;