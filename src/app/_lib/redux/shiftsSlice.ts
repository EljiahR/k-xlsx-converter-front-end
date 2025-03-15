import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import { cloneDeep } from "lodash"
import { expectedOutput } from "../test/expectedOutput";
import { CartSlotValueAction, CartSlotAction, CartSlotDragAction, MinutesToBreakAction, SetMinutesToBreakAction, ShiftsState, GetEmployeeToggleAction, GetEmployeeBreakToggleAction, GetEmployeeChangeAction, GetEmployeeAction } from "./reduxTypes";
import { addMinutesToBreak } from "../helpers/timeFunctions";
import sortEmptyToEnd from "../helpers/sortEmptyToEnd";

const initialState: ShiftsState = {
    value: null,
    newFirstName: "",
    newLastName: ""
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
            const { day, employeeIdentifier, jobPosition, breakType, minutesToAdd } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return;

            const personToEdit = employeeIdentifier.id != "" && employeeIdentifier.id != null && employeeIdentifier.id != "0" ?
                job.shifts.find(s => s.employeeId == employeeIdentifier.id)
                : job.shifts.find(s => s.name.firstName == employeeIdentifier.firstName && s.name.lastName == employeeIdentifier.lastName)
            if (!personToEdit){
                console.log("No person")
                return;
            }

            
            
            personToEdit[breakType].time = addMinutesToBreak(personToEdit[breakType].time, minutesToAdd)
        },
        changeBreak: (state, action: PayloadAction<SetMinutesToBreakAction>) => {
            const { day, employeeIdentifier, jobPosition, breakType, minutesToChangeTo } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) return;

            const personToEdit = employeeIdentifier.id != "" && employeeIdentifier.id != null && employeeIdentifier.id != "0" ?
                job.shifts.find(s => s.employeeId == employeeIdentifier.id)
                : job.shifts.find(s => s.name.firstName == employeeIdentifier.firstName && s.name.lastName == employeeIdentifier.lastName)
            if (!personToEdit){
                console.log("No person")
                return;
            }
            
            personToEdit[breakType].time = minutesToChangeTo;
        },
        toggleBreakEdit: (state, action: PayloadAction<GetEmployeeBreakToggleAction>) => {
            const { day, employeeIdentifier, jobPosition, breakType, isEditable } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) {
                console.log("No job")
                return;
            }

            const personToEdit = employeeIdentifier.id != "" && employeeIdentifier.id != null && employeeIdentifier.id != "0" ?
                job.shifts.find(s => s.employeeId == employeeIdentifier.id)
                : job.shifts.find(s => s.name.firstName == employeeIdentifier.firstName && s.name.lastName == employeeIdentifier.lastName)
            if (!personToEdit){
                console.log("No person")
                return
            }

            personToEdit[breakType].editable = isEditable;
        },
        toggleCartSlotEdit: (state, action: PayloadAction<CartSlotAction>) => {
            const { day, pos, index } = action.payload;
            let carts = state.value[day]?.carts;
            
            const wasEditable = carts[index][pos].editable;
            carts[index][pos].editable = !wasEditable;
            if (wasEditable) carts[index].sort(sortEmptyToEnd);
        },
        editCartSlot: (state, action: PayloadAction<CartSlotValueAction>) => {
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
            if (carts[index][pos].editable) {
                carts[index][pos].editable = false;
                carts[index].sort(sortEmptyToEnd);
            }
            carts[targetIndex].sort(sortEmptyToEnd);
        },
        toggleNameEdit: (state, action: PayloadAction<GetEmployeeToggleAction>) => {
            const { day, employeeIdentifier, jobPosition, isEditable } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) {
                console.log("No job")
                return;
            }

            const personToEdit = employeeIdentifier.id != "" && employeeIdentifier.id != null ?
                job.shifts.find(s => s.employeeId == employeeIdentifier.id)
                : job.shifts.find(s => s.name.firstName == employeeIdentifier.firstName && s.name.lastName == employeeIdentifier.lastName)
            if (!personToEdit){
                console.log("No person")
                return
            }

            personToEdit.name.editable = isEditable;
        },
        nameChange: (state, action: PayloadAction<GetEmployeeAction>) => {
            const { day, employeeIdentifier, jobPosition } = action.payload;
            
            const job = state.value[day]?.jobPositions.find(j => j.name == jobPosition)
            if (!job) {
                console.log("No job")
                return;
            }

            const personToEdit = employeeIdentifier.id != "" && employeeIdentifier.id != null ?
                job.shifts.find(s => s.employeeId == employeeIdentifier.id)
                : job.shifts.find(s => s.name.firstName == employeeIdentifier.firstName && s.name.lastName == employeeIdentifier.lastName)
            if (!personToEdit){
                console.log("No person")
                return
            }

            if (state.newFirstName != "" || state.newLastName) {
                if (state.newFirstName != "") {
                    personToEdit.name.firstName = state.newFirstName;
                } 
                if (state.newLastName != "") {
                    personToEdit.name.lastName = state.newLastName;
                }

                if (job.name == "Front End Courtesy Clerks") {
                    const matchedFirstName = job.shifts.find(s => s.name.firstName == personToEdit.name.firstName);
                    personToEdit.name.baggerName = !matchedFirstName ? 
                        personToEdit.name.firstName :
                        personToEdit.name.firstName + " " + (personToEdit.name.lastName != "" ? personToEdit.name.lastName[0] : "")
                }
            }

            state.newFirstName = "";
            state.newLastName = "";
            personToEdit.name.editable = false
        },
        changeNewFirstName: (state, action: PayloadAction<string>) => {
            state.newFirstName = action.payload
        }, 
        changeNewLastName: (state, action: PayloadAction<string>) => {
            state.newLastName = action.payload
        },
        clearNewNames: (state) => {
            state.newFirstName = "";
            state.newLastName = "";
        }
    }
});

export const { setAsTest, setShiftsNull, setNewShifts, addToBreak, changeBreak, toggleBreakEdit, toggleCartSlotEdit, editCartSlot, dragCartSlot, toggleNameEdit, nameChange, changeNewFirstName, changeNewLastName, clearNewNames } = shiftsSlice.actions;

export default shiftsSlice.reducer;