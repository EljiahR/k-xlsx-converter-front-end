import styles from "@/styles/Board.module.css";
import BlankRow from "./BoardSubComponents/BlankRow";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import moment from "moment";
import { useState } from "react";
import {
  addMinutesToBreak,
  timeIsLaterThan,
  getDatesFromBreaks,
} from "../../_lib/helpers/timeFunctions";
import { joinWithLast } from "src/app/_lib/helpers/formatFunctions";
import { BreakChangeType, BreakClickType, ISelectedTime, KeyUpDownType } from "src/app/_lib/types/boardTypes";
import { useAppDispatch, useAppSelector } from "src/app/_lib/redux/hooks";
import { GetEmployeeBreakAction, GetEmployeeBreakToggleAction, MinutesToBreakAction, SetMinutesToBreakAction } from "src/app/_lib/redux/reduxTypes";
import { addToBreak, changeBreak, toggleBreakEdit } from "src/app/_lib/redux/shiftsSlice";

const Board = () => {
  const shifts = useAppSelector((state) => state.shifts.value);
  const currentDay = useAppSelector((state) => state.shifts.day);
  const dispatch = useAppDispatch();

  const [selectedTime, setSelectedTime] = useState<ISelectedTime>({
    time: "",
    section: "",
    time15: "",
    timeMinus15: "",
  });

  const handleKeyUpDown: KeyUpDownType = (e, thisPerson, positionName, breakType, section) => {
    if ((e.key == "ArrowUp" || e.key == "ArrowDown") && e.currentTarget.value != "") {
      e.preventDefault();
      
      
      let shiftToEdit = shifts[currentDay].jobPositions.find(
        (shift) => shift.name === positionName,
      );

      let personToEdit = shiftToEdit.shifts.find(
        (person) =>
          person.firstName === thisPerson.firstName &&
          person.lastName === thisPerson.lastName &&
          person.shiftStart == thisPerson.shiftStart,
      );

      const minutes = e.key == "ArrowUp" ? 15 : -15;
      const newTime = addMinutesToBreak(personToEdit[breakType].time, minutes);

      if (timeIsLaterThan(newTime, personToEdit.shiftStart, true) &&
        timeIsLaterThan(personToEdit.shiftEnd, newTime)
      ) {
        const action: MinutesToBreakAction = {
          day: currentDay,
          employeeIdentifier: {id: thisPerson.employeeId, firstName: thisPerson.firstName, lastName: thisPerson.lastName},
          jobPosition: positionName,
          breakType,
          minutesToAdd: minutes
        }
        dispatch(addToBreak(action));

        setSelectedTime({
          time: newTime,
          section,
          time15: addMinutesToBreak(
            newTime,
            breakType == "lunch" ? 15 : 0,
          ),
          timeMinus15: addMinutesToBreak(newTime, -15),
        });
      } else {
        return null;
      }
    }
  };

  const handleBreakChange: BreakChangeType = (e, thisPerson, positionName, breakType) => {
      const action: SetMinutesToBreakAction = {
        day: currentDay,
        employeeIdentifier: {id: thisPerson.employeeId, firstName: thisPerson.firstName, lastName: thisPerson.lastName},
        jobPosition: positionName,
        breakType,
        minutesToChangeTo: e.target.value
      }
      dispatch(changeBreak(action));
      
  };

  // Toggles breaks and lunches into input elements
  const handleBreakClick: BreakClickType = (thisPerson, positionName, breakType, section, time, isEditable
  ) => {
    const action: GetEmployeeBreakToggleAction = {
      day: currentDay,
      jobPosition: positionName,
      employeeIdentifier: {id: thisPerson.employeeId, firstName: thisPerson.firstName, lastName: thisPerson.lastName},
      breakType,
      isEditable
    }
    let time15 = breakType == "lunch" ? moment(getDatesFromBreaks(time, 15)).format("LT") : time;
    
    const timeMinus15 = moment(getDatesFromBreaks(time, -15)).format("LT");
    dispatch(toggleBreakEdit(action));
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
        {shifts[currentDay].birthdays.length > 0 && (
          <div id={styles["birthdays"]}>
            <h2>Happy Birthday {joinWithLast([...shifts[currentDay].birthdays],", ", " and ")}!</h2>
          </div>
        )}
        {shifts[currentDay].holidays.length > 0 && (
          <div id={styles["holidays"]}>
            <h2>Happy {joinWithLast([...shifts[currentDay].holidays],", ", " and ")}!</h2>
          </div>
        )}
        {shifts[currentDay].jobPositions.find(
          (shift) => shift.name === "Call Ups",
        ) && (
          
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
