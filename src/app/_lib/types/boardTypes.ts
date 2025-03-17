import { KeyboardEvent, MutableRefObject } from "react";
import { IEmployeeBO } from "./shiftTypes";

// Props
export interface IndividualShiftsProps {
  people: IEmployeeBO[];
  positionName: string;
  section: string;
  inputReference: MutableRefObject<any>;
}

export interface BreaksProps extends Omit<IndividualShiftsProps, "people"> {
  person: IEmployeeBO;
  breakClass: string;
  breakType: string;
  inputReference: MutableRefObject<any>;
}

// Interfaces
export interface ISelectedTime {
  time: string;
  section: string;
  time15: string;
  timeMinus15: string;
}
