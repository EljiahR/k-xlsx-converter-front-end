import moment from "moment";
import { ICartsDTO, ICartShift, IEmployeeBO, IEmployeeDTO, IJobPositionBO, IJobPositionDTO, IWeekdayBO, IWeekdayDTO } from "../types/shiftTypes";

let shiftId = 0;

const shiftsDTOToBO = (shifts: IEmployeeDTO[], position: string): IEmployeeBO[] => {
  console.log("current shiftId: " + shiftId);
  return shifts.map((shift) => ({
    employeeId: (shiftId++).toString(),
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
  console.log("Formatting job position...")
  return jobPositions.map((jobPosition) => ({
    ...jobPosition,
    shifts: shiftsDTOToBO(jobPosition.shifts, jobPosition.name),
  }));
};

let cartId = 0;

const formatCarts = (carts: ICartsDTO[]): ICartShift[][] => {
  console.log("Formatting carts...")
  return carts.map((x) => [
    { name: x.baggers[0] ?? "", editable: false, id: (cartId++).toString() },
    { name: x.baggers[1] ?? "", editable: false, id: (cartId++).toString() },
    { name: x.baggers[2] ?? "", editable: false, id: (cartId++).toString() },
    { name: x.baggers[3] ?? "", editable: false, id: (cartId++).toString() },
  ]);
};

const formatWeek = (weekdays: IWeekdayDTO[]): IWeekdayBO[] => {
  console.log("Formatting week...")
  return weekdays.map((weekday) => ({
    ...weekday,
    date: moment(weekday.date).format("dddd M/D/YYYY"),
    jobPositions: formatJobPositions(weekday.jobPositions),
    carts: formatCarts(weekday.carts),
    previouscarts: [],
    carts15: formatCarts(weekday.carts15),
    previouscarts15: []
  }));
};

export default formatWeek;
