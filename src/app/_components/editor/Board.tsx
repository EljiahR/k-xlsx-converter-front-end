import styles from "@/styles/Board.module.css";
import BlankRow from "./BlankRow";
import CallUps from "./CallUps";
import IndividualShifts from "./IndividualShifts";
import Liquor from "./Liquor";
import moment from "moment";
import { useState } from "react";
import {
  addMinutesToBreak,
  timeIsLaterThan,
  getDatesFromBreaks,
} from "../../_lib/timeFunctions";
import { IWeekdayBO } from "src/app/_lib/dtoToBO";

interface BoardProps {
  currentDay: number;
  shifts: IWeekdayBO[];
  setShifts: React.Dispatch<React.SetStateAction<IWeekdayBO[]>>
}

const Board = ({ currentDay, shifts, setShifts }: BoardProps) => {
  const [selectedTime, setSelectedTime] = useState({
    time: "",
    section: "",
    time15: "",
    timeMinus15: "",
  });

  const handleKeyUpDown = (e, thisPerson, positionName, breakType, section) => {
    if ((e.key == "ArrowUp" || e.key == "ArrowDown") && e.target.value != "") {
      e.preventDefault();
      let newShifts = JSON.parse(JSON.stringify(shifts));
      let shiftToEdit = newShifts[currentDay].jobPositions.find(
        (shift) => shift.name === positionName,
      );

      let personToEdit = shiftToEdit.shifts.find(
        (person) =>
          person.firstName === thisPerson.firstName &&
          person.lastName === thisPerson.lastName &&
          person.shiftStart == thisPerson.shiftStart,
      );

      personToEdit[breakType].time = addMinutesToBreak(
        personToEdit[breakType].time,
        e.key == "ArrowUp" ? 15 : -15,
      );
      if (
        timeIsLaterThan(
          personToEdit[breakType].time,
          personToEdit.shiftStart,
          true,
        ) &&
        timeIsLaterThan(personToEdit.shiftEnd, personToEdit[breakType].time)
      ) {
        setShifts(newShifts);
        setSelectedTime({
          time: personToEdit[breakType].time,
          section,
          time15: addMinutesToBreak(
            personToEdit[breakType].time,
            breakType == "lunch" ? 15 : 0,
          ),
          timeMinus15: addMinutesToBreak(personToEdit[breakType].time, -15),
        });
      } else {
        return null;
      }
    }
  };

  const handleBreakChange = (e, thisPerson, positionName, breakType) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let shiftToEdit = newShifts[currentDay].jobPositions.find(
      (shift) => shift.name === positionName,
    );

    let personToEdit = shiftToEdit.shifts.find(
      (person) =>
        person.firstName === thisPerson.firstName &&
        person.lastName === thisPerson.lastName,
    );
    console.log(thisPerson);
    console.log(personToEdit);

    personToEdit[breakType].time = e.target.value;

    setShifts(newShifts);
  };

  // Toggles breaks and lunches into input elements
  const handleBreakClick = (
    thisPerson,
    positionName,
    breakType,
    onOff,
    section,
    time,
  ) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let shiftToEdit = newShifts[currentDay].jobPositions.find(
      (shift) => shift.name === positionName,
    );

    let personToEdit = shiftToEdit.shifts.find(
      (person) =>
        person.firstName === thisPerson.firstName &&
        person.lastName === thisPerson.lastName &&
        person.shiftStart == thisPerson.shiftStart,
    );
    if (!personToEdit[breakType].hasOwnProperty("time")) {
      personToEdit[breakType].time = "";
      time = "";
    }
    personToEdit[breakType].editable = onOff;

    let time15;
    if (breakType == "lunch") {
      time15 = moment(getDatesFromBreaks(time, 15)).format("LT");
    } else {
      time15 = time;
    }
    const timeMinus15 = moment(getDatesFromBreaks(time, -15)).format("LT");

    setShifts(newShifts);
    setSelectedTime({ time, section, time15, timeMinus15 });
  };

  return (
    <>
      <div id={styles["report"]}>
        <h5 id={styles["date"]}>{shifts[currentDay].date}</h5>
        <div id={styles["labels"]}>
          <h6>Tasks</h6>
          <h6>Name</h6>
          <h6>Start</h6>
          <h6>End</h6>
          <h6>Break</h6>
          <h6>Lunch</h6>
          <h6>Break</h6>
          <h6 id={styles["fresh-start-label"]}>FS</h6>
        </div>
        {shifts[currentDay].jobPositions.find(
          (shift) => shift.name === "Front End Supervisor",
        ) && (
          <>
            <div className={styles["front-end-header"]}>
              <div className="blank-cell"></div>
              <div className="header-title">Front End Supervisors</div>
            </div>
            <div className={styles["front-end-content"]}>
              <IndividualShifts
                people={
                  shifts[currentDay].jobPositions.find(
                    (shift) => shift.name === "Front End Supervisor",
                  ).shifts
                }
                positionName="Front End Supervisor"
                handleBreakClick={handleBreakClick}
                handleBreakChange={handleBreakChange}
                handleKeyUpDown={handleKeyUpDown}
                selectedTime={selectedTime}
                section="desk"
              />
              <BlankRow />
              <BlankRow />
            </div>
          </>
        )}

        <div className={styles["front-end-header"]}>
          <div className="blank-cell"></div>
          <div className="header-title">Front End Cashiers</div>
        </div>
        <div className={styles["front-end-content"]}>
          <IndividualShifts
            people={
              shifts[currentDay].jobPositions.find(
                (shift) => shift.name === "Front End Cashier",
              ).shifts
            }
            positionName="Front End Cashier"
            handleBreakClick={handleBreakClick}
            handleBreakChange={handleBreakChange}
            handleKeyUpDown={handleKeyUpDown}
            selectedTime={selectedTime}
            section="cashier"
          />
          <BlankRow />
          <BlankRow />
        </div>
        <div className={styles["front-end-header"]}>
          <div className="blank-cell"></div>
          <div className="header-title">Self-Checkout</div>
        </div>
        <div className={styles["front-end-content"]}>
          <IndividualShifts
            people={
              shifts[currentDay].jobPositions.find(
                (shift) => shift.name === "Front End SCO Cashier",
              ).shifts
            }
            positionName="Front End SCO Cashier"
            handleBreakClick={handleBreakClick}
            handleBreakChange={handleBreakChange}
            handleKeyUpDown={handleKeyUpDown}
            selectedTime={selectedTime}
            section="cashier"
          />
          <BlankRow />
          <BlankRow />
        </div>
        <div className={styles["front-end-header"]}>
          <div className="blank-cell"></div>
          <div className="header-title">Courtesy Clerks</div>
        </div>
        <div className={styles["front-end-content"]}>
          <IndividualShifts
            people={
              shifts[currentDay].jobPositions.find(
                (shift) => shift.name === "Front End Courtesy Clerk",
              ).shifts
            }
            positionName="Front End Courtesy Clerk"
            handleBreakClick={handleBreakClick}
            handleBreakChange={handleBreakChange}
            handleKeyUpDown={handleKeyUpDown}
            selectedTime={selectedTime}
            section="bagger"
          />
          <BlankRow />
          <BlankRow />
        </div>
        <div className={styles["front-end-header"]}>
          <div className="blank-cell"></div>
          <div className="header-title">Service Desk</div>
        </div>
        <div className={styles["front-end-content"]}>
          <IndividualShifts
            people={
              shifts[currentDay].jobPositions.find(
                (shift) => shift.name === "Front End Service Desk",
              ).shifts
            }
            positionName="Front End Service Desk"
            handleBreakClick={handleBreakClick}
            handleBreakChange={handleBreakChange}
            handleKeyUpDown={handleKeyUpDown}
            selectedTime={selectedTime}
            section="desk"
          />
          <BlankRow />
          <BlankRow />
        </div>
        <div className={styles["front-end-header"]}>
          <div className="blank-cell"></div>
          <div className="header-title">Fuel Center</div>
        </div>
        <div id={styles["fuel"]} className={styles["front-end-content"]}>
          <IndividualShifts
            people={
              shifts[currentDay].jobPositions.find(
                (shift) => shift.name === "Fuel Clerk",
              ).shifts
            }
            positionName="Fuel Clerk"
            handleBreakClick={handleBreakClick}
            handleBreakChange={handleBreakChange}
            handleKeyUpDown={handleKeyUpDown}
            selectedTime={selectedTime}
            section="desk"
          />
        </div>
      </div>
      <div id={styles["side-section"]}>
        {shifts[currentDay].jobPositions.find(
          (shift) => shift.name === "Call Ups",
        ) && (
          <>
            <div id="call-ups">
              <h2 className="side-header">Call Ups and Misc</h2>
              <div id="call-ups-section">
                <CallUps
                  people={
                    shifts[currentDay].jobPositions.find(
                      (shift) => shift.name === "Call Ups",
                    ).shifts
                  }
                  positionName="callup"
                />
              </div>
            </div>
          </>
        )}

        <div id="liquor">
          <h2 className="side-header">Liquor</h2>
          <div id={styles["liquor-section"]}>
            <Liquor
              people={
                shifts[currentDay].jobPositions.find(
                  (shift) => shift.name === "Liquor Clerk",
                ).shifts
              }
              positionName="liquor"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Board;
