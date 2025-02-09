import moment from "moment";

interface IBreak {
  time: string;
  editable: boolean;
}

interface SubshiftDTO {
  shiftStart: Date;
  shiftEnd: Date;
  originalPosition: string;
}

interface SubshiftBO {
  shiftStart: string;
  shiftEnd: string;
  originalPosition: string;
}

interface IEmployeeDTO {
  employeeId: Number;
  firstName: string;
  lastName: string;
  shiftStart: Date;
  shiftEnd: Date;
  breakOne?: Date;
  lunch?: Date;
  breakTwo?: Date;
  originalPosition?: string;
  subshift?: SubshiftDTO;
}

interface IEmployeeBO
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

interface IJobPositionDTO {
  name: string;
  shifts: IEmployeeDTO[];
}

interface IJobPositionBO {
  name: string;
  shifts: IEmployeeBO[];
}

interface ICartsDTO {
  time: Date;
  baggers: string[4];
}

interface ICartShift {
  name: string;
  editable: boolean;
}

interface IWeekdayDTO {
  day: string;
  date: Date;
  jobPositions: IJobPositionDTO[];
  carts: ICartsDTO[];
}

interface IWeekdayBO {
  day: string;
  date: string;
  jobPositions: IJobPositionBO[];
  carts: ICartShift[][];
}

const shiftsDTOToBO = (shifts: IEmployeeDTO[]): IEmployeeBO[] => {


  return shifts.map((shift) => ({
    ...shift,
    edit: false,
    shiftStart: moment(shift.shiftStart).format("h:mma").slice(0, -1),
    shiftEnd: moment(shift.shiftEnd).format("h:mma").slice(0, -1),
    breakOne: {
      editable: false,
      time: shift.breakOne ? moment(shift.breakOne).format("h:mm A") : "",
    },
    lunch: {
      editable: false,
      time: shift.lunch ? moment(shift.lunch).format("h:mm A") : "",
    },
    breakTwo: {
      editable: false,
      time: shift.breakTwo ? moment(shift.breakTwo).format("h:mm A") : "",
    },
    originalPosition: shift.originalPosition ?? "",
    subshift: shift.subshift == null ? null : {
      shiftStart: moment(shift.shiftStart).format("h:mma").slice(0, -1),
      shiftEnd: moment(shift.shiftEnd).format("h:mma").slice(0, -1),
      originalPosition: shift.subshift.originalPosition
    }
  }));
};

const formatJobPositions = (
  jobPositions: IJobPositionDTO[],
): IJobPositionBO[] => {
  return jobPositions.map((jobPosition) => ({
    ...jobPosition,
    shifts: shiftsDTOToBO(jobPosition.shifts),
  }));
};

const formatCarts = (carts: ICartsDTO[]): ICartShift[][] => {
  return carts.map((x) => [
    { name: x.baggers[0] ?? "", editable: false },
    { name: x.baggers[1] ?? "", editable: false },
    { name: x.baggers[2] ?? "", editable: false },
    { name: x.baggers[3] ?? "", editable: false },
  ]);
};

const formatWeek = (weekdays: IWeekdayDTO[]): IWeekdayBO[] => {
  console.log()
  return weekdays.map((weekday) => ({
    ...weekday,
    date: moment(weekday.date).format("dddd M/D/YYYY"),
    jobPositions: formatJobPositions(weekday.jobPositions),
    carts: formatCarts(weekday.carts),
  }));
};

export default formatWeek;
export type { IEmployeeBO, SubshiftBO };
