import { getCarts } from "./getCarts";
// initialShifts used for reseting shifts state
import initialShifts from "./shiftsObject";
import { getAmPm } from "./getAmPm";
import { getBreaks } from "./getBreaks";
import { getDatesFromTimes } from "./timeFunctions";
import { indexKey, jobKey } from "./indexKey";
import { toProperCase } from "./properCase";

export const getEmployees = async (data) => {
  const response = await fetch("/api/store/get/549");
  const employees = await response.json();

  let newShifts = getNewShifts(data, employees);

  return newShifts;
};

const getNewShifts = (data, employees) => {
  // Don't think I need this, needed in xlsx version
  //let dayOfWeekPosition = 0;
  
  let dayOfWeekIndex = -1;
  let currentDate;
  let newShifts = JSON.parse(JSON.stringify(initialShifts));

  /* 
      the column that contains the name, 
      /and the one that contains the shift starting 
      /time arent always in the same column cuz Kroger
      */
  let nameCol, shiftStartCol;
  data.forEach((row, index) => {
    if (/^[a-zA-Z]{3} \d+\/\d+\/\d+$/.test(row[0])) {
      //dayofWeekPosition = index;
      dayOfWeekIndex += 1;
      newShifts[dayOfWeekIndex].Date = row[0];
      currentDate = new Date(row[0].slice(4));
      // getting carts for previous day
      if (dayOfWeekIndex > 0) {
        let baggers = newShifts[dayOfWeekIndex - 1].Shifts.find(
          (shift) => shift.name === "Front End Courtesy Clerk",
        );
        newShifts[dayOfWeekIndex - 1].Carts = getCarts(baggers.people);
      }
    }

    // Getting column indexes for name and start
    if (
      dayOfWeekIndex == 0 &&
      !nameCol &&
      !shiftStartCol &&
      row[0] === "Location"
    ) {
      let colIndex = 1;
      while ((!nameCol || !shiftStartCol) && row[colIndex] !== "") {
        if (row[colIndex] === "Name") {
          nameCol = colIndex;
        }
        if (row[colIndex] === "Start") {
          shiftStartCol = colIndex;
        }
        colIndex++;
      }
    }

    // Checking if row contains employee
    let shiftIndex = indexKey.indexOf(row[4]);
    
    if (shiftIndex >= 0) {
      let destructeredStr = row[nameCol].replace(",", "").split(" ");
      [destructeredStr[0], destructeredStr[1]] = [
        toProperCase(destructeredStr[0]),
        toProperCase(destructeredStr[1]),
      ];
      let employeeInfo = employees.find(
        (employee) =>
          employee["first_name"].toLowerCase() ===
            destructeredStr[1].toLowerCase() &&
          employee["last_name"].toLowerCase() ===
            destructeredStr[0].toLowerCase(),
      );

      // Initializing variables for employees not yet in database
      let age = 18;
      let getsLunch = false;
      let breakPreference = 2;
      let deleteEmployee = false;
      let callUp = false;
      let callUpPosition;
      // Grabbing and converting employee info for use in determining breaks
      
      if (employeeInfo) {
        
        let birthday = new Date(employeeInfo.birthday);
        breakPreference = employeeInfo["break_preference"];
        age = Math.floor(
          Math.abs(birthday - currentDate) / (365.2425 * 24 * 60 * 60 * 1000),
        );
        // a deletion flag for those whose hours were hidden up front
        if (employeeInfo["position_override"] === "DELETE") {
          deleteEmployee = true;
        }
        //Pretty self-explanatory, only minors get lunches unless otherwise requested
        getsLunch = age < 18 || employeeInfo["lunch_override"];
        if (
          employeeInfo["first_name_preference"] != "" &&
          employeeInfo["first_name_preference"] != " "
        ) {
          destructeredStr[1] = employeeInfo["first_name_preference"];
        } else {
          destructeredStr[1] = toProperCase(destructeredStr[1]);
        }

        callUp = employeeInfo["call_up"];
      }
      
      if (shiftIndex > 6 && !callUp) {
        deleteEmployee = true;
      }
      // Grabbing a or p suffix for start and end shifts
      // Originally inside the if (!deleteEmployee) section, moved to fix an issue on a broken excel file
      let [start, end, trueJobKey, splitShifts] = getAmPm(row, shiftStartCol);
    
      if(trueJobKey == "File" && !(row[nameCol + 3] == "Front End File Maint" || row[nameCol + 3] == "Front End Admin Supprt")){
        deleteEmployee = true;
      }
      
      // Not necessarily deleting employee just not pushing them into array
      if (!deleteEmployee && splitShifts.length < 1) {
        
        let truePosition = jobKey[trueJobKey];
        shiftIndex = indexKey.indexOf(truePosition);
      
        if (
          (!truePosition.includes("Front") &&
            !truePosition.includes("Fuel") &&
            !truePosition.includes("Liquor") ) ||
          truePosition == "Front End File Maint"
        ) {
          shiftIndex = 7;
          callUpPosition = truePosition.split(" ")[0];
        }
        let break1,
          lunch,
          break2 = "";
        // Only getting breaks for front end Employees
        if (truePosition.includes("Front")) {
          [break1, lunch, break2] = getBreaks(
            start,
            end,
            getsLunch,
            breakPreference,
          );
        }

        newShifts[dayOfWeekIndex].Shifts[shiftIndex].people.push({
          "first name": destructeredStr[1],
          "last name": toProperCase(destructeredStr[0]),
          "unique name": toProperCase(destructeredStr[1]),
          start,
          end,
          break1: { time: break1, editable: false },
          lunch: { time: lunch, editable: false },
          break2: { time: break2, editable: false },
          callUp,
          callUpPosition,
        });
      } else {
        splitShifts.forEach(shift => {
          shiftIndex = indexKey.indexOf(jobKey[shift.jobKey])
          if(shiftIndex > 7) shiftIndex = 7;
          newShifts[dayOfWeekIndex].Shifts[shiftIndex].people.push({
            "first name": destructeredStr[1],
            "last name": toProperCase(destructeredStr[0]),
            "unique name": toProperCase(destructeredStr[1]),
            start: shift.start,
            end: shift.end,
            break1: { time: "", editable: false },
            lunch: { time: "", editable: false },
            break2: { time: "", editable: false },
            callUp: false,
            callUpPosition: "",
          });
        })
      }
    }
  });

  //Getting carts for saturday, couldnt find a better spot
  let baggers = newShifts[6].Shifts.find(
    (shift) => shift.name === "Front End Courtesy Clerk",
  );
  newShifts[6].Carts = getCarts(baggers.people);
  
  //Sorting all positions
  const shiftSort = (a, b) => {
    const [aTime, bTime] = getDatesFromTimes(a.start, b.start);
    return aTime - bTime;
  };
  newShifts.forEach((dayOfWeek) => {
    dayOfWeek.Shifts.forEach((shift) => {
      shift.people.sort(shiftSort);
    });
  });
  
  return newShifts;
};
