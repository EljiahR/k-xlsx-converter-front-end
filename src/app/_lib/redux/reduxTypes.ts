import { ISelectedTime } from "../types/boardTypes";
import { IWeekdayBO } from "../types/shiftTypes";

// Interface
export interface ShiftsState {
    value: IWeekdayBO[],
    selectedTime: ISelectedTime,
    day: number,
    selectedBagger: string
}

export interface CartSlotDragAction {
    index: number;
    pos: number;
    newValue: string;
    targetIndex: number;
    targetPos: number;
}