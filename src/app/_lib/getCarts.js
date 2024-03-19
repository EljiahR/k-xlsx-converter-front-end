import lotTimes from "./lotTimes";
import { getDatesFromBreaks, getDatesFromTimes } from "./timeFunctions";
import moment from "moment";

Date.prototype.addMinutes = function (m) {
  this.setTime(this.getTime() + m * 60 * 1000);
  return this;
};

const arrayContainsName = (arr, name) => {
  let result = false;
  arr.forEach((item) => {
    if (item.name === name) {
      result = true;
    }
  });
  return result;
};

const indexOfEmptyString = (arr) => {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === "") {
      result = i;
      break;
    }
  }
  return result;
};

export const getCarts = (baggers) => {
  
  let carts = [
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
    [
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
      { name: "", editable: false },
    ],
  ];
  const names = [];
  baggers.forEach((bagger) => {
    const repeatName = names.find((name) => name.name == bagger["unique name"]);
    if (repeatName) {
      repeatName.occurences += 1;
    } else {
      names.push({
        name: bagger["unique name"],
        occurences: 1,
      });
    }
  });
  baggers.forEach((bagger) => {
    let [startTime, endTime] = getDatesFromTimes(
      bagger.start,
      bagger.end
     );

    let break1 = getDatesFromBreaks(bagger.break1.time)
    let lunch = getDatesFromBreaks(bagger.lunch.time)
    let break2 = getDatesFromBreaks(bagger.break2.time)
    
    const nameObject = names.find((name) => name.name == bagger["unique name"]);
    if (nameObject.occurences > 1) {
      bagger["unique name"] =
        bagger["first name"] + " " + bagger["last name"].charAt(0);
    }

    if (/:(15|45)/.test(bagger.start)) {
      startTime.addMinutes(15);
    }
    if (/:(15|45)/.test(bagger.end)) {
      endTime.addMinutes(-45);
    } else {
      endTime.addMinutes(-30);
    }
    if (/:(15|45)/.test(bagger.break1.time)) {
      break1.addMinutes(-15);
    }
    if (/:(15|45)/.test(bagger.lunch.time)) {
      lunch.addMinutes(-15);
    }
    if (/:(15|45)/.test(bagger.break2.time)) {
      break2.addMinutes(-15);
    }

    startTime = moment(startTime).format("LT");
    endTime = moment(endTime).format("LT");
    break1 = break1 != "" ? moment(break1).format("LT") : "";
    lunch = lunch != "" ? moment(lunch).format("LT") : "";
    break2 = break2 != "" ? moment(break2).format("LT") : "";
    let startIndex;
    let endIndex;
    
    for (let i = 0; i < lotTimes.length; i++) {
      if (startTime == lotTimes[i]) {
        startIndex = i;
      }

      if (
        i >= startIndex &&
        (startIndex || startIndex == 0) &&
        lotTimes[i] != break1 &&
        lotTimes[i] != lunch &&
        lotTimes[i] != break2
      ) {
        let emptySpot = indexOfEmptyString(carts[i]);
        let previousSpot = i != 0 ? i - 1 : 0;

        if (
          emptySpot >= 0 &&
          !arrayContainsName(carts[previousSpot], bagger["unique name"])
        ) {
          carts[i][emptySpot].name = bagger["unique name"];
        }
      }
      if (endTime == lotTimes[i]) {
        endIndex = i;
      }

      if (endIndex) {
        break;
      }
    }
  });
  return carts;
};
