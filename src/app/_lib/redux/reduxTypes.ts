import { IWeekdayBO } from "../types/shiftTypes";

// Interface
export interface ShiftsState {
    value: IWeekdayBO[]
}

export interface DaysState {
    value: number;
}

// Action Interfaces
export interface GetEmployeeAction {
    day: number;
    employeeId: string;
    jobPosition: string;
}

export interface GetEmployeeBreakAction extends GetEmployeeAction {
    breakType: string;
}

export interface GetEmployeeBreakToggleAction extends GetEmployeeBreakAction {
    isEditable: boolean;
}

export interface SetMinutesToBreakAction extends GetEmployeeBreakAction {
    minutesToChangeTo: string;
}

export interface MinutesToBreakAction extends GetEmployeeBreakAction {
    minutesToAdd: number;
} 

export interface CartSlotAction {
    day: number;
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