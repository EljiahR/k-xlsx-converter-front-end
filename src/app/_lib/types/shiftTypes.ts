export interface IBreak {
    time: string;
    editable: boolean;
}

export interface SubshiftDTO {
    shiftStart: Date;
    shiftEnd: Date;
    originalPosition: string;
}

export interface SubshiftBO {
    shiftStart: string;
    shiftEnd: string;
    originalPosition: string;
}

export interface IEmployeeDTO {
    employeeId?: number;
    firstName: string;
    lastName: string;
    baggerName: string,
    shiftStart: Date;
    shiftEnd: Date;
    breakOne?: Date;
    lunch?: Date;
    breakTwo?: Date;
    originalPosition?: string;
    subshift?: SubshiftDTO;
}

export interface IEmployeeBO
    extends Omit<
        IEmployeeDTO,
        "shiftStart" | "shiftEnd" | "breakOne" | "lunch" | "breakTwo" | "subshift"
    > {
    shiftStart: string;
    shiftEnd: string;
    breakOne: IBreak;
    lunch: IBreak;
    breakTwo: IBreak;
    edit: boolean;
    subshift?: SubshiftBO 
}

export interface IJobPositionDTO {
    name: string;
    shifts: IEmployeeDTO[];
}

export interface IJobPositionBO {
    name: string;
    shifts: IEmployeeBO[];
}

export interface ICartsDTO {
    time: Date;
    baggers: string[4];
}

export interface ICartShift {
    name: string;
    editable: boolean;
}

export interface IWeekdayDTO {
    day: string;
    date: Date;
    holidays: string[];
    birthdays: string[];
    jobPositions: IJobPositionDTO[];
    carts: ICartsDTO[];
    errors: Record<string, string[]>;
}

export interface IWeekdayBO {
    day: string;
    date: string;
    holidays: string[];
    birthdays: string[];
    jobPositions: IJobPositionBO[];
    carts: ICartShift[][];
    errors: Record<string, string[]>;
}