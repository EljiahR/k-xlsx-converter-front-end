import moment from "moment";
import { ICartsDTO, ICartShift, IEmployeeBO, IEmployeeDTO, IJobPositionBO, IJobPositionDTO, IWeekdayBO, IWeekdayDTO } from "../types/shiftTypes";

const shiftsDTOToBO = (shifts: IEmployeeDTO[], position: string): IEmployeeBO[] => {
  return shifts.map((shift) => ({
    ...shift,
    name: {
      firstName: shift.firstName,
      lastName: shift.lastName,
      baggerName: shift.baggerName,
      isEditable: false
    },
    edit: false,
    shiftStart: moment(shift.shiftStart).format("h:mma").slice(0, -1),
    shiftEnd: moment(shift.shiftEnd).format("h:mma").slice(0, -1),
    breakOne: shift.breakOne ? moment(shift.breakOne).format("h:mm A") : "",
    lunch: shift.lunch ? moment(shift.lunch).format("h:mm A") : "",
    breakTwo: shift.breakTwo ? moment(shift.breakTwo).format("h:mm A") : "",
    originalPosition: shift.originalPosition ?? "",
    subshift: shift.subshift == null ? null : {
      shiftStart: moment(shift.subshift.shiftStart).format("h:mma").slice(0, -1),
      shiftEnd: moment(shift.subshift.shiftEnd).format("h:mma").slice(0, -1),
      originalPosition: shift.subshift.originalPosition
    },
    position
  }));
};

const formatJobPositions = (
  jobPositions: IJobPositionDTO[],
): IJobPositionBO[] => {
  return jobPositions.map((jobPosition) => ({
    ...jobPosition,
    shifts: shiftsDTOToBO(jobPosition.shifts, jobPosition.name),
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
