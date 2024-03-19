import styles from "@/styles/Board.module.css";
import BlankRow from "@/components/editor/BlankRow";
import CallUps from "@/components/editor/CallUps";
import IndividualShifts from "@/components/editor/IndividualShifts";
import Liquor from "@/components/editor/Liquor";
import moment from "moment"
import { useState } from "react";
import { addMinutesToBreak, compareTime, getDatesFromBreaks } from "@/lib/timeFunctions"

const Board = ({ currentDay, shifts, setShifts }) => {
  const [selectedTime, setSelectedTime] = useState({ time: "", section: "", time15:"", timeMinus15: "" });

  const handleKeyUpDown = (e, thisPerson, positionName, breakType, section) => {
    if((e.key == "ArrowUp" || e.key == "ArrowDown") && e.target.value != ""){
      e.preventDefault()
      let newShifts = JSON.parse(JSON.stringify(shifts));
      let shiftToEdit = newShifts[currentDay].Shifts.find(
        (shift) => shift.name === positionName,
      );

      let personToEdit = shiftToEdit.people.find(
        (person) =>
          person["first name"] === thisPerson["first name"] &&
          person["last name"] === thisPerson["last name"],
      );

      personToEdit[breakType].time = addMinutesToBreak(personToEdit[breakType].time, e.key == "ArrowUp" ? 15 : -15);
      if(compareTime(personToEdit[breakType].time, personToEdit.start) && compareTime(personToEdit.end, personToEdit[breakType].time)){
        setShifts(newShifts);
        setSelectedTime({ time: personToEdit[breakType].time, section, time15: addMinutesToBreak(personToEdit[breakType].time, breakType == "lunch" ? 15 : 0), timeMinus15: addMinutesToBreak(personToEdit[breakType].time, -15) })
      } else {
        return null
      }
      
    }
  }
  
  const handleBreakChange = (e, thisPerson, positionName, breakType) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let shiftToEdit = newShifts[currentDay].Shifts.find(
      (shift) => shift.name === positionName,
    );

    let personToEdit = shiftToEdit.people.find(
      (person) =>
        person["first name"] === thisPerson["first name"] &&
        person["last name"] === thisPerson["last name"],
    );
    
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
    let shiftToEdit = newShifts[currentDay].Shifts.find(
      (shift) => shift.name === positionName,
    );

    let personToEdit = shiftToEdit.people.find(
      (person) =>
        person["first name"] === thisPerson["first name"] &&
        person["last name"] === thisPerson["last name"],
    );
    if(!personToEdit[breakType].hasOwnProperty("time")){
      personToEdit[breakType].time = ""
      time = ""
    }
    personToEdit[breakType].editable = onOff;

    let time15;
    if(breakType == "lunch"){
      time15 = moment(getDatesFromBreaks(time, 15)).format("LT")
    } else {
      time15 = time
    }
    const timeMinus15 = moment(getDatesFromBreaks(time, -15)).format("LT")
    
    setShifts(newShifts);
    setSelectedTime({time, section, time15, timeMinus15});
  };

  return (
    <>
      <div id={styles["report"]}>
        <h5 id={styles["date"]}>{shifts[currentDay].Date}</h5>
        <div id={styles["labels"]}>
          <h6>Tasks</h6>
          <h6>Name</h6>
          <h6>Start</h6>
          <h6>End</h6>
          <h6>Break</h6>
          <h6>Lunch</h6>
          <h6>Break</h6>
        </div>
        {shifts[currentDay].Shifts.find(
          (shift) => shift.name === "Front End Supervisor",
        ).people.length > 0 && (
          <>
            <div className={styles["front-end-header"]}>
              <div className="blank-cell"></div>
              <div className="header-title">Front End Supervisors</div>
            </div>
            <div className={styles["front-end-content"]}>
              <IndividualShifts
                people={
                  shifts[currentDay].Shifts.find(
                    (shift) => shift.name === "Front End Supervisor",
                  ).people
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
              shifts[currentDay].Shifts.find(
                (shift) => shift.name === "Front End Cashier",
              ).people
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
              shifts[currentDay].Shifts.find(
                (shift) => shift.name === "Front End SCO Cashier",
              ).people
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
              shifts[currentDay].Shifts.find(
                (shift) => shift.name === "Front End Courtesy Clerk",
              ).people
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
              shifts[currentDay].Shifts.find(
                (shift) => shift.name === "Front End Service Desk",
              ).people
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
              shifts[currentDay].Shifts.find(
                (shift) => shift.name === "Fuel Clerk",
              ).people
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
        <div id="call-ups">
          <h2 className="side-header">Call Ups and Misc</h2>
          <div id="call-ups-section">
            <CallUps
              people={
                shifts[currentDay].Shifts.find(
                  (shift) => shift.name === "Call Up",
                ).people
              }
              positionName="callup"
            />
          </div>
        </div>
        <div id="liquor">
          <h2 className="side-header">Liquor</h2>
          <div id={styles["liquor-section"]}>
            <Liquor
              people={
                shifts[currentDay].Shifts.find(
                  (shift) => shift.name === "Liquor Clerk",
                ).people
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
