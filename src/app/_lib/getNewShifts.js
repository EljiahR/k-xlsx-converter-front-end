import formatWeek from "./dtoToBO.ts";

export const getEmployees = async (xlsxFile) => {
  const data = new FormData();
  data.append("file", xlsxFile);

  const response = await fetch(
    "https://kxlsxconverterapi20240713102707.azurewebsites.net/Employee/Dailies/16/549",
    {
      method: "POST",
      body: data,
    },
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Error response:", error);
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const newShifts = await response.json();
  console.log(newShifts);
  const formattedShifts = formatWeek(newShifts);

  return formattedShifts;
};
