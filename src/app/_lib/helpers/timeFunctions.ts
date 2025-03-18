import moment from "moment";

//converts start and end times to date objects
declare global {
  interface Date {
    addMinutes(m: number): Date;
  }
}


Date.prototype.addMinutes = function (m: number): Date {
  this.setTime(this.getTime() + m * 60 * 1000);
  return this;
};

export const getDatesFromTimes = (...timesToChange: string[]) => {
  let fixedTimes = [];
  timesToChange.forEach((time) => {
    if (time == "") {
      fixedTimes.push(time);
    } else {
      let [timeHoursText, timeMinutesText] = time.split(":");
      let timeSuffix;
      if (/[ap]$/.test) {
        timeSuffix = time.charAt(time.length - 1);
      } else {
        timeSuffix = time.charAt(time.length - 2).toLowerCase();
      }
      let timeHours = parseInt(timeHoursText);
      let timeMinutes;
      try {
        timeMinutes = parseInt(timeMinutesText.charAt(0) + timeMinutesText.charAt(1));
      } catch (e) {
        console.log("Wrong time format, should be (H:MM AM/PM)")
        return;
      }

      if (timeHours < 12 && timeSuffix === "p") {
        timeHours = timeHours + 12;
      } else {
        timeHours = timeHours;
      }

      

      let timeToDate = new Date(null, null, null, timeHours, timeMinutes);
      fixedTimes.push(timeToDate);
    }
  });

  return fixedTimes;
};

export const getDatesFromBreaks = (breakToFix: string, minutesToAdd = 0) => {
  if (breakToFix == "") {
    return breakToFix;
  } else {
    let [timeHoursText, timeMinutesText] = breakToFix.split(":");
    let timeHours = parseInt(timeHoursText);
    let timeMinutes = parseInt(timeMinutesText.charAt(0) + timeMinutesText.charAt(1));
    let timeSuffix;

    timeSuffix = breakToFix.slice(breakToFix.length - 2);

    if (timeHours < 12 && timeSuffix === "PM") {
      timeHours = timeHours + 12;
    } else {
      timeHours = timeHours;
    }
    

    let timeToDate = new Date(null, null, null, timeHours, timeMinutes);
    timeToDate.addMinutes(minutesToAdd);
    return timeToDate;
  }
};

export const reformatTimes = (...times: string[]) => {
  const fixedTimes = [];
  times.forEach((time) => {
    if (/a$/.test(time)) {
      fixedTimes.push(time.replace("a", " AM"));
    } else if (/p$/.test(time)) {
      fixedTimes.push(time.replace("p", " PM"));
    } else if (/AM$/.test(time)) {
      fixedTimes.push(time.replace("AM", " a"));
    } else if (/PM$/.test(time)) {
      fixedTimes.push(time.replace("PM", " p"));
    } else {
      fixedTimes.push("");
    }
  });
  return fixedTimes;
};

export const startToBreakAddMinutes = (time: string, minutesToAdd: number) => {
  let [date] = getDatesFromTimes(time);
  date.addMinutes(minutesToAdd);
  let result = moment(date).format("LT");

  return result;
};

export const timeIsLaterThan = (time1: string, time2: string, isStartTime = false) => {
  const date1 = /[AP]M$/.test(time1)
    ? getDatesFromBreaks(time1)
    : getDatesFromTimes(time1)[0];
  const date2 = /[AP]M$/.test(time2)
    ? getDatesFromBreaks(time2)
    : getDatesFromTimes(time2)[0];
  if (isStartTime) return date1 >= date2;
  return date1 > date2;
};

export const timeIsWithin = (startTime: string, endTime: string, targetTime: string) => {
    return timeIsLaterThan(targetTime, startTime, true) && timeIsLaterThan(endTime, targetTime);
}

export const addMinutesToBreak = (thisBreak: string, minutes: number) => {
  let date = getDatesFromBreaks(thisBreak, minutes);
  return moment(date).format("LT");
};
