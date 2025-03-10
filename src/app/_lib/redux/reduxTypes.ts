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

export interface SetMinutesToBreakAction extends GetEmployeeBreakAction {
    minutesToChangeTo: string;
}

export interface MinutesToBreakAction extends GetEmployeeBreakAction {
    minutesToAdd: number;
} 