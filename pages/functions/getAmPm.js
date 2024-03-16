import { jobKey, timeKey } from "./indexKey";
//Used to stop front end jobs being split 
const frontEndJobKey = ["B", "!", "P", "$", "U"];
// Liquor clerks(L) don't need split when wine stuards
const liquorKey = ["L", "W"]

// Gets time of day (AM,PM) based on location of first jobkey found in given row
// Also gets true jobkey, often different from actual position, i.e. cashier scheduled in liquor or sco 
export const getAmPm = (row, shiftStartCol) => {
  // JS tuple for return all gathered info
  let fixedTimes = [];

   
  const startIndex = row.findIndex((cell) => jobKey.hasOwnProperty(cell));

  let previousIndex = startIndex;

  let splitShiftIndexes = [startIndex];

  //boolean flags to stop unnecessary split shifts
  let frontCheck;
  let liquorCheck;
  
  for (let i = startIndex; i < row.length; i++) {
    if (!row[i] && !row[i + 1]) break;
    let previousKey = frontEndJobKey.findIndex(
      (cell) => cell == row[previousIndex],
    );
    let previousLiquorKey = liquorKey.findIndex(
      (cell) => cell == row[previousIndex],
    );
    let currentKey = frontEndJobKey.findIndex((cell) => cell == row[i]);
    let currentLiquorKey = liquorKey.findIndex((cell) => cell == row[i]);
    if (previousKey != -1 && currentKey != -1) {
      frontCheck = true;
    } else {
      frontCheck = false;
    }
    
    if (previousLiquorKey != -1 && currentLiquorKey != -1) {
        liquorCheck = true;
    } else {
        liquorCheck = false;
    }

    if (
      row[i] != "~"  // Automatic lunch I think
      && row[i] != "=" // I dont know what this is
      && row[i] != row[previousIndex] 
      && row[i] 
      && !frontCheck 
      && !liquorCheck
    ) {
      splitShiftIndexes.push(i);
      previousIndex = i;
    }
  }

  let trueJob;
  if (startIndex == -1) {
    trueJob = "File";
  } else {
    trueJob = row[startIndex];
  }

  const endIndex = row.findLastIndex((cell) => jobKey.hasOwnProperty(cell));

  if (startIndex < 62 && startIndex > 14) {
    fixedTimes.push(row[shiftStartCol] + "a");
  } else {
    fixedTimes.push(row[shiftStartCol] + "p");
  }

  if (endIndex < 61 || endIndex === 112) {
    fixedTimes.push(row[9] + "a");
  } else {
    fixedTimes.push(row[9] + "p");
  }

  fixedTimes.push(trueJob);

  let splitShifts = [];
  if (splitShiftIndexes.length > 1) {
    let previousEnd;
    splitShiftIndexes.forEach((pos, index, arr) => {
      let splitStart;
      let splitEnd;
      let jobKey = row[pos];

      if (!previousEnd) {
        splitStart = timeKey[startIndex - 1] ? timeKey[startIndex - 1] : timeKey[startIndex]; // This subtraction shouldnt be necessary
      } else {
        splitStart = previousEnd;
      }

      if (index == arr.length - 1) {
        splitEnd = timeKey[endIndex];
      } else {
        let nextStart = arr[index + 1] - 1;// This -1 shouldnt be necessary but it doesnt work without it
        splitEnd = timeKey[nextStart]
          ? timeKey[nextStart]
          : timeKey[nextStart - 1];
        previousEnd = splitEnd
      }

      splitShifts.push({
        start: splitStart,
        end: splitEnd,
        jobKey,
      });
    });
    
  }
  fixedTimes.push(splitShifts)
  console.log(row)
  console.log(fixedTimes)
  return fixedTimes;
};
