import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import { IEmployeeBO } from "./shiftTypes";

// Props
export interface IndividualShiftsProps {
  people: IEmployeeBO[];
  positionName: string;
  handleBreakClick: BreakClickType;
  handleBreakChange: BreakChangeType;
  handleKeyUpDown: KeyUpDownType;
  handleNameToggle: EmployeeToggleType;
  handleNameToggleBlur: EmployeeToggleBlurType;
  handleNameChange: EmployeeChangeType;
  selectedTime: ISelectedTime;
  section: string;
}

export interface BreaksProps extends Omit<IndividualShiftsProps, "people" | "handleNameToggle" | "handleNameChange" | "handleNameToggleBlur"> {
  person: IEmployeeBO;
  breakClass: string;
  breakType: string;
}

export interface IndividualNameProps {
  jobPosition: string;
  person: IEmployeeBO;
  handleNameToggle: EmployeeToggleType;
  handleNameChange: EmployeeChangeType;
  handleNameToggleBlur: EmployeeToggleBlurType;
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
export type EmployeeToggleType = (thisPerson: IEmployeeBO, positionName: string, isEditable: boolean) => void;
export type EmployeeToggleBlurType = (e: FocusEvent<HTMLDivElement, Element>, thisPerson: IEmployeeBO, positionName: string, isEditable: boolean) => void;
export type EmployeeChangeType = (e: ChangeEvent<HTMLInputElement>, thisPerson: IEmployeeBO, positionName: string, nameToChange: string) => void;
