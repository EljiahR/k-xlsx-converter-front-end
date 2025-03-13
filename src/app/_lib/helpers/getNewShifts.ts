import instance from "../axiosBase";
import formatWeek from "./dtoToBO";
import { IWeekdayDTO } from "../types/shiftTypes";

export const getEmployees = async (xlsxFile) => {
  const data = new FormData();
  data.append("file", xlsxFile);

  const response = await instance.post<IWeekdayDTO[]>("/Employee/Dailies/16/549", data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  if (response.status != 200) {
    const error = await response.statusText;
    console.error("Error response:", error);
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const newShifts = response.data;
  console.log(newShifts);
  const formattedShifts = formatWeek(newShifts);

  return formattedShifts;
};
