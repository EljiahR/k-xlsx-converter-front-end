const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayConstructor = (Weekday) => {
  return {
    Weekday,
    Date: "",
    Shifts: [
      {
        name: "Front End Cashier",
        code: "$",
        people: [],
      },
      {
        name: "Front End Courtesy Clerk",
        code: "B",
        people: [],
      },
      {
        name: "Front End SCO Cashier",
        code: "U",
        people: [],
      },
      {
        name: "Front End Service Desk",
        code: "!",
        people: [],
      },
      {
        name: "Front End Supervisor",
        code: "P",
        people: [],
      },
      {
        name: "Fuel Clerk",
        code: "Z",
        people: [],
      },
      {
        name: "Liquor Clerk",
        code: "L",
        people: [],
      },
      {
        name: "Call Up",
        people: [],
      },
    ],
    Carts: Array(36).fill(Array(4).fill("")),
  };
};

let initialShifts = [];

WEEKDAYS.forEach((weekday) => initialShifts.push(dayConstructor(weekday)));
export default initialShifts;
