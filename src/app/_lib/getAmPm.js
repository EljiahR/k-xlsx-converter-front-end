import { jobKey, timeKey } from "./indexKey";
//Used to stop front end jobs being split 
const frontEndJobKey = ["B", "!", "P", "$", "U"];
// Liquor clerks(L) don't need split when wine stewards
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
  
    console.log(row)
    console.log(splitShiftIndexes);
    splitShiftIndexes.forEach((pos, index, arr) => {
    
      let jobKey = row[pos];
      
      let splitStart = !timeKey[pos] ? timeKey[pos - 1] : timeKey[pos]; 

      let splitEnd = arr[index + 1] ? timeKey[arr[index + 1]] : timeKey[endIndex + 1]; //not sure why the + 1 to endIndex is needed
 
      splitShifts.push({
        start: splitStart,
        end: splitEnd,
        jobKey,
      });
    });
    
  }
  
  console.log(splitShifts)
  fixedTimes.push(splitShifts)
  return fixedTimes;
};
