const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayConstructor = (day) => {
  return {
    day,
    date: "Error has occured",
    jobPositions: [
      {
        name: "Front End Cashier",

        shifts: Array(5).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        )
      },
      {
        name: "Front End Courtesy Clerk",

        shifts: Array(2).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Front End SCO Cashier",

        shifts: Array(8).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Front End Service Desk",

        shifts: Array(6).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Front End Supervisor",

        shifts: Array(2).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Fuel Clerk",

        shifts: Array(2).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Liquor Clerk",

        shifts: Array(5).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
      {
        name: "Floral Clerk",
        shifts: Array(8).fill(
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          }
        ),
      },
    ],
    carts: Array(36).fill(Array(4).fill({ name: "", editable: false })),
  };
};

let initialShifts = [];

["Error"].forEach((weekday) => initialShifts.push(dayConstructor(weekday)));
export default initialShifts;
