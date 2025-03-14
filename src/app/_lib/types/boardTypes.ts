import { ChangeEvent, KeyboardEvent } from "react";
import { IEmployeeBO } from "./shiftTypes";

// Props
export interface IndividualShiftsProps {
  people: IEmployeeBO[];
  positionName: string;
  handleBreakClick: BreakClickType;
  handleBreakChange: BreakChangeType;
  handleKeyUpDown: KeyUpDownType;
  selectedTime: ISelectedTime;
  section: string;
}

export interface BreaksProps extends Omit<IndividualShiftsProps, "people"> {
  person: IEmployeeBO;
  breakClass: string;
  breakType: string;
}

export interface IndividualNameProps {
  day: number;
  jobPosition: string;
  person: IEmployeeBO;
}

// Interfaces
export interface ISelectedTime {
  time: string;
  section: string;
  time15: string;
  timeMinus15: string;
}

// Types

export type BreakClickType = (thisPerson: IEmployeeBO, positionName: string, breakType: string, section: string, time: any, isEditable: boolean) => void;
export type KeyUpDownType = (e: KeyboardEvent<HTMLInputElement>, thisPerson: IEmployeeBO, positionName: string, breakType: string, section: string) => void;
export type BreakChangeType = (e: ChangeEvent<HTMLInputElement>, thisPerson: IEmployeeBO, positionName: string, breakType: string) => void;
