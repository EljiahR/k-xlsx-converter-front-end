import { ISelectedTime } from "../types/boardTypes";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";

// Interface
export interface ShiftsState {
    value: IWeekdayBO[],
    selectedTime: ISelectedTime,
    day: number
}

export interface DaysState {
    value: number;
}

interface EmployeeIdentifier {
    id: string;
    firstName: string;
    lastName: string;
}

// Action Interfaces
export interface GetEmployeeAction {
    employee: IEmployeeBO;
    jobPosition: string;
}

export interface GetEmployeeBreakAction extends GetEmployeeAction {
    breakType: string;
}

export interface GetEmployeeBreakToggleAction extends GetEmployeeBreakAction {
    isEditable: boolean;
}

export interface ChangeBreakAction extends GetEmployeeBreakAction {
    minutesToChangeTo: string;
}

export interface MinutesToBreakAction extends GetEmployeeBreakAction {
    minutesToAdd: number;
} 

export interface CartSlotAction {
    index: number;
    pos: number;
}

export interface CartSlotValueAction extends CartSlotAction {
    newValue: string;
}

export interface CartSlotDragAction extends CartSlotValueAction {
    targetIndex: number;
    targetPos: number;
}