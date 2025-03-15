import { KeyboardEvent } from "react";
import { IEmployeeBO } from "./shiftTypes";

// Props
export interface IndividualShiftsProps {
  people: IEmployeeBO[];
  positionName: string;
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
  timeMinus15: string;
}
