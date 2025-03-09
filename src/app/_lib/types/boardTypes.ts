import { ChangeEvent, KeyboardEvent } from "react";
import { IEmployeeBO, IWeekdayBO } from "./shiftTypes";

// Props
export interface BoardProps {
  currentDay: number;
  shifts: IWeekdayBO[];
  setShifts: React.Dispatch<React.SetStateAction<IWeekdayBO[]>>
}

export interface IndividualShiftsProps {
  people: IEmployeeBO[];
  positionName: string;
  handleBreakClick: BreakClick;
  handleBreakChange: BreakChange;
  handleKeyUpDown: KeyUpDown;
  selectedTime: ISelectedTime;
  section: string;
}

export interface BreaksProps extends Omit<IndividualShiftsProps, "people"> {
  person: IEmployeeBO;
  breakClass: string;
  breakType: string;
}

// Interfaces
export interface ISelectedTime {
  time: string;
  section: string;
  time15: string;
  timeMinus15;
}

// Types

export type BreakClick = (thisPerson: IEmployeeBO, positionName: string, breakType: string, onOff: boolean, section: string, time: any) => void;
export type KeyUpDown = (e: KeyboardEvent<HTMLInputElement>, thisPerson: IEmployeeBO, positionName: string, breakType: string, section: string) => void;
export type BreakChange = (e: ChangeEvent<HTMLInputElement>, thisPerson: IEmployeeBO, positionName: string, breakType: string) => void;
