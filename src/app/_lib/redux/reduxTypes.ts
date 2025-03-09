import { IWeekdayBO } from "../types/shiftTypes";

// Interface
export interface ShiftsState {
    value: IWeekdayBO[]
}

export interface DaysState {
    value: number;
}

// Action Interfaces
export interface MinutesToBreakAction {
    day: number;
    employeeId: string;
    jobPosition: string;
    breakType: string;
    minutesToAdd: number;
} 