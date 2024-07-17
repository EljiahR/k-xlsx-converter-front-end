import moment from "moment";

interface IEmployeeDTO {
  firstName: string;
  lastName: string;
  shiftStart: Date;
  shiftEnd: Date;
  breakOne?: Date;
  lunch?: Date;
  breakTwo?: Date;
}

interface IBreak {
  time: string;
  editable: boolean;
}

interface IEmployeeBO
  extends Omit<
    IEmployeeDTO,
    "shiftStart" | "shiftEnd" | "breakOne" | "lunch" | "breakTwo"
  > {
  shiftStart: string;
  shiftEnd: string;
  breakOne: IBreak;
  lunch: IBreak;
  breakTwo: IBreak;
}

interface IJobPositionDTO {
  name: string;
  shifts: IEmployeeDTO[];
}

interface IJobPositionBO {
  name: string;
  shifts: IEmployeeBO[];
}

interface IWeekdayDTO {
  day: string;
  date: Date;
  jobPositions: IJobPositionDTO[];
  carts: any;
}

interface IWeekdayBO {
  day: string;
  date: string;
  jobPositions: IJobPositionBO[];
  carts: any;
}

const shiftsDTOToBO = (shifts: IEmployeeDTO[]): IEmployeeBO[] => {
  return shifts.map((shift) => ({
    ...shift,
    shiftStart: moment(shift.shiftStart).format("h:mma"),
    shiftEnd: moment(shift.shiftEnd).format("h:mma"),
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

const formatWeek = (weekdays: IWeekdayDTO[]): IWeekdayBO[] => {
  return weekdays.map((weekday) => ({
    ...weekday,
    date: moment(weekday.date).format("dddd D/M/YYYY"),
    jobPositions: formatJobPositions(weekday.jobPositions),
  }));
};

export default formatWeek;
