import moment from "moment";
import { getDatesFromTimes } from "./timeFunctions";

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

Date.prototype.addMinutes = function (m) {
  this.setTime(this.getTime() + m * 60 * 1000);
  return this;
};

export const getBreaks = (start, end, getsLunch, breakPreference) => {
  let [startTime, endTime] = getDatesFromTimes(start, end);
  let length = Math.abs(endTime - startTime);
  length = length / (60 * 60 * 1000);

  if (length > 8.5) {
    length /= 2;
  }

  /* 
  To be replaced once I set up a database of 
  break preferences and a way to get age
  */
  let break1 = new Date(startTime);
  let lunch = new Date(startTime);
  let break2 = new Date(endTime);
  if (breakPreference === 1) {
    if (length >= 6) {
      lunch.addHours(length / 2);
    } else {
      break1.addHours(length / 2);
    }
  } else if (length > 8) {
    break1.addHours(2);
    lunch.addHours(4);
    break2.addHours(-2);
  } else if (length > 7.5 && getsLunch) {
    break1.addHours(2);
    lunch.addHours(4);
    break2.addHours(-2);
  } else if (length > 7.5) {
    break1.addHours(3);
    break2.addHours(-2);
  } else if (length >= 6.5 && getsLunch) {
    break1.addHours(2);
    lunch.addHours(4);
    break2.addHours(-1);
  } else if (length >= 5 && getsLunch) {
    break1.addHours(2);
    lunch.addHours(4);
  } else if (length >= 6) {
    break1.addHours(2);
    break2.addHours(-2);
  } else if (length < 6 && length >= 4) {
    break1.addHours(length / 2);
  }

  // break1 turning into data despite
  // skipping previous if/else statement needs fixed
  if (break1.toString() != startTime.toString()) {
    break1 = moment(break1).format("LT");
  } else {
    break1 = "";
  }
  if (lunch.toString() != startTime.toString()) {
    lunch = moment(lunch).format("LT");
  } else {
    lunch = "";
  }
  if (break2.toString() != endTime.toString()) {
    break2 = moment(break2).format("LT");
  } else {
    break2 = "";
  }

  return [break1, lunch, break2];
};
