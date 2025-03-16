import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";
import { ShiftsState } from "./reduxTypes";
import { addMinutesToBreak, getDatesFromBreaks, timeIsLaterThan } from "../helpers/timeFunctions";
import sortEmptyToEnd from "../helpers/sortEmptyToEnd";
import { ISelectedTime } from "../types/boardTypes";
import moment from "moment";
import { FocusEvent, KeyboardEvent } from "react";

const initialState: ShiftsState = {
    value: null,
    selectedTime: {
        time: "",
        section: "",
        time15: "",
        timeMinus15: "",
    },
    day: 0,
    selectedBagger: ""
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
                : job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName)
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
                : job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName)
            if (!personToEdit){
                console.log("No person")
                return;
            }
            
            personToEdit[breakType].time = minutesToChangeTo;
        },
        toggleNameEdit: (state, action: PayloadAction<{employee: IEmployeeBO, jobPosition: string, isEditable: boolean}>) => {
            const {employee, jobPosition, isEditable } = action.payload;

            const job = state.value[state.day]?.jobPositions.find(j => j.name == jobPosition);
            if (!job) return;

            const personToEdit = employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
                job.shifts.find(s => s.employeeId == employee.employeeId) :
                job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName);
            if (!personToEdit) return;

            personToEdit.name.isEditable = isEditable;
            
        },
        toggleNameEditBlur: (state, action: PayloadAction<{e: FocusEvent, employee: IEmployeeBO, jobPosition: string, isEditable: boolean}>) => {
            const {e, employee, jobPosition, isEditable } = action.payload;
            if (e.currentTarget.contains(e.relatedTarget)) return;

            const job = state.value[state.day]?.jobPositions.find(j => j.name == jobPosition);
            if (!job) return;

            const personToEdit = employee.employeeId != "" && employee.employeeId != null && employee.employeeId != "0" ?
                job.shifts.find(s => s.employeeId == employee.employeeId) :
                job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName);
            if (!personToEdit) return;

            personToEdit.name.isEditable = isEditable;
            
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
                : job.shifts.find(s => s.name.firstName == employee.name.firstName && s.name.lastName == employee.name.lastName)
            if (!personToEdit){
                console.log("No person")
                return
            }
            const time = employee[breakType].time;
            const time15 = breakType == "lunch" ? moment(getDatesFromBreaks(time, 15)).format("LT") : time;
                
            const timeMinus15 = moment(getDatesFromBreaks(time, -15)).format("LT");

            personToEdit[breakType].editable = isEditable;
            console.log(personToEdit[breakType].editable)
            state.selectedTime = { time, section, time15, timeMinus15 };
        },
        toggleCartSlotEdit: (state, action: PayloadAction<{ pos: number, index: number, name: string }>) => {
            const { pos, index, name } = action.payload;
            let carts = state.value[state.day]?.carts;
            
            const wasEditable = carts[index][pos].editable;
            carts[index][pos].editable = !wasEditable;
            if (wasEditable) carts[index].sort(sortEmptyToEnd);

            state.selectedBagger = name;
        },
        editCartSlot: (state, action: PayloadAction<{pos: number, index: number, newValue: string}>) => {
            const { pos, index, newValue } = action.payload;
            let carts = state.value[state.day]?.carts;

            carts[index][pos].name = newValue;
            if (newValue == "") carts[index].sort(sortEmptyToEnd);
        },
        dragCartSlot: (state, action: PayloadAction<{index: number, pos: number, newValue: string, targetIndex: number, targetPos: number}>) => {
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
        },
        setSelectedBagger: (state, action: PayloadAction<string>) => {
            state.selectedBagger = action.payload;
        },
        clearSelectedBagger: (state) => {
            state.selectedBagger = "";
        }
    }
});

export const { setAsTest, setShiftsNull, setNewShifts, addToBreak, changeBreak, toggleNameEdit, toggleNameEditBlur, toggleBreakEdit, toggleCartSlotEdit, editCartSlot, dragCartSlot, setDay, setSelectedTime, setSelectedBagger, clearSelectedBagger } = shiftsSlice.actions;

export default shiftsSlice.reducer;