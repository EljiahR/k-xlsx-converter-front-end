import styles from "@/styles/Board.module.css";
import BlankRow from "./BoardSubComponents/BlankRow";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import { joinWithLast } from "src/app/_lib/helpers/formatFunctions";
import { useAppSelector } from "src/app/_lib/redux/hooks";
import { useRef } from "react";

const Board = () => {
  const shifts = useAppSelector((state) => state.shifts.value);
  const currentDay = useAppSelector((state) => state.shifts.day);
  const inputReference = useRef(null);

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
                section="desk"
                inputReference={inputReference}
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
            section="cashier"
            inputReference={inputReference}
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
            section="cashier"
            inputReference={inputReference}
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
            section="bagger"
            inputReference={inputReference}
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
            section="desk"
            inputReference={inputReference}
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
            section="desk"
            inputReference={inputReference}
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
