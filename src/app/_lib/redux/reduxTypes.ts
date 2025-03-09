import { IWeekdayBO } from "../types/shiftTypes";

// Interface
export interface ShiftsState {
    value: IWeekdayBO[]
}

export interface DaysState {
    value: number;
}

// Action Interfaces
export interface SetMinutesToBreakAction {
    day: number;
    employeeId: string;
    jobPosition: string;
    breakType: string;
    minutesToChangeTo: string;
}

export interface MinutesToBreakAction extends Omit<SetMinutesToBreakAction, "minutesToChange"> {
    minutesToAdd: number;
} 