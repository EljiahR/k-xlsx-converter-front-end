import styles from "@/styles/Board.module.css";
import BlankRow from "./BoardSubComponents/BlankRow";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import { joinWithLast } from "../../_lib/helpers/formatFunctions";
import { useAppSelector } from "../../_lib/redux/hooks";
import { useRef } from "react";
import { selectCurrentDayShifts } from "../../_lib/redux/shiftsSlice";

const Board = () => {
  const shifts = useAppSelector(selectCurrentDayShifts);
  const inputReference = useRef(null);

  return (
    <div>
      <div>
        {shifts.jobPositions.find(
          (shift) => shift.name === "Front End Supervisor",
        ) && (
            <IndividualShifts
              people={
                shifts.jobPositions.find(
                  (shift) => shift.name === "Front End Supervisor",
                ).shifts
              }
              positionName="Front End Supervisor"
              section="desk"
              inputReference={inputReference}
            />
        )}

        <IndividualShifts
          people={
            shifts.jobPositions.find(
              (shift) => shift.name === "Front End Cashier",
            ).shifts
          }
          positionName="Front End Cashier"
          section="cashier"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={
            shifts.jobPositions.find(
              (shift) => shift.name === "Front End SCO Cashier",
            ).shifts
          }
          positionName="Front End SCO Cashier"
          section="cashier"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={
            shifts.jobPositions.find(
              (shift) => shift.name === "Front End Courtesy Clerk",
            ).shifts
          }
          positionName="Front End Courtesy Clerk"
          section="bagger"
          inputReference={inputReference}
        />
      
        <IndividualShifts
          people={
            shifts.jobPositions.find(
              (shift) => shift.name === "Front End Service Desk",
            ).shifts
          }
          positionName="Front End Service Desk"
          section="desk"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={
            shifts.jobPositions.find(
              (shift) => shift.name === "Fuel Clerk",
            ).shifts
          }
          positionName="Fuel Clerk"
          section="desk"
          inputReference={inputReference}
        />

      </div>
      <div id={styles["side-section"]}>
        {shifts.birthdays.length > 0 && (
          <div id={styles["birthdays"]}>
            <h2>Happy Birthday {joinWithLast([...shifts.birthdays],", ", " and ")}!</h2>
          </div>
        )}
        {shifts.holidays.length > 0 && (
          <div id={styles["holidays"]}>
            <h2>Happy {joinWithLast([...shifts.holidays],", ", " and ")}!</h2>
          </div>
        )}
        {shifts.jobPositions.find(
          (shift) => shift.name === "Call Ups",
        ) && (
          
            <div id="call-ups">
              <h2 className="side-header">Call Ups and Misc</h2>
              <div id="call-ups-section">
                <CallUps
                  people={
                    shifts.jobPositions.find(
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
                shifts.jobPositions.find(
                  (shift) => shift.name === "Liquor Clerk",
                ).shifts
              }
              positionName="liquor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
