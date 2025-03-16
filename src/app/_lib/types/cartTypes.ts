import { ChangeEvent, DragEvent } from "react";
import { ICartShift, IEmployeeBO, IJobPositionBO, IWeekdayBO, SubshiftBO } from "./shiftTypes";

// Props
export interface CartSlotProps {
  index: number;
  pos: number;
  name: string;
  editable: boolean;
  handleOnDrag: OnDragType;
  handleOnDragOver: OnDragOverType;
  handleOnDrop: OnDropType;
  handleOnChange: OnChangeType;
  inputReference: React.MutableRefObject<any>;
  carts: ICartShift[][];
  selectedBagger: string;
  time: string;
  baggerList: IJobPositionBO;
}

export interface RestroomProps {
  utilityClerks: IEmployeeBO[]
}

// Interfaces
export interface BaggerInfo {
  name: string,
  break1: string,
  lunch1: string,
  lunch2: string,
  break2: string,
  subShift?: SubshiftBO
}
  
export interface BaggerCartInfo {
  start: string,
  end: string,
  break1: string,
  lunch1: string,
  lunch2: string,
  break2: string,
  subShift?: SubshiftBO
}

// Types
export type OnDragType = (e: DragEvent<HTMLInputElement | HTMLDivElement>, name: string) => void;
export type OnDragOverType = (e: DragEvent<HTMLInputElement | HTMLDivElement>) => void;
export type OnDropType = (e: DragEvent<HTMLInputElement | HTMLDivElement>) => void;
export type OnChangeType = (e: ChangeEvent<HTMLInputElement>, index: number, pos: number) => void;
