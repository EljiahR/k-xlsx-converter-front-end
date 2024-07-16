const url = process.env["API_URL"];

export const getEmployees = async (xlsxFile) => {
  const data = new FormData();
  data.append("file", xlsxFile);
  console.log(url);
  const response = await fetch(
    `/Employee/Dailies/16/549`,
    {
      method: "POST",
      body: data,
    },
  );
  const newShifts = await response.json();

  return newShifts;
};
