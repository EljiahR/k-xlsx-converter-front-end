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
    date: "",
    jobPositions: [
      {
        name: "Front End Cashier",

        shifts: [
          {
            firstName: "Error",
            lastName: "Occured",
            shiftStart: "12:00p",
            shiftEnd: "1:00p",
            breakOne: { time: "", editable: false },
            lunch: { time: "", editable: false },
            breakTwo: { time: "", editable: false },
            originalPosition: "Error",
          },
        ],
      },
      {
        name: "Front End Courtesy Clerk",

        shifts: [],
      },
      {
        name: "Front End SCO Cashier",

        shifts: [],
      },
      {
        name: "Front End Service Desk",

        shifts: [],
      },
      {
        name: "Front End Supervisor",

        shifts: [],
      },
      {
        name: "Fuel Clerk",

        shifts: [],
      },
      {
        name: "Liquor Clerk",

        shifts: [],
      },
      {
        name: "Floral Clerk",
        shifts: [],
      },
    ],
    carts: Array(36).fill(Array(4).fill({ name: "", editable: false })),
  };
};

let initialShifts = [];

WEEKDAYS.forEach((weekday) => initialShifts.push(dayConstructor(weekday)));
export default initialShifts;
