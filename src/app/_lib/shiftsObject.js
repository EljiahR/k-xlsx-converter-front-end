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
        
        shifts: [],
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
    Carts: Array(36).fill(Array(4).fill("")),
  };
};

let initialShifts = [];

WEEKDAYS.forEach((weekday) => initialShifts.push(dayConstructor(weekday)));
export default initialShifts;
