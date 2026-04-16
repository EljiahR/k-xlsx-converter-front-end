import styles from "@/styles/IndividualShifts.module.css";
import { IndividualShiftsProps } from "../../../_lib/types/boardTypes";
import { Breaks } from "./Breaks";
import IndividualName from "./IndividualShiftsSubComponents/IndividualName";
import { useAppDispatch } from "../../../_lib/redux/hooks";
import { deleteShift } from "../../../_lib/redux/shiftsSlice";
import React from "react";

const IndividualShifts = ({
  people,
  positionName,
  section,
}: IndividualShiftsProps) => {
  const dispatch = useAppDispatch();

  const shifts = people.map((person) => {
    return (
      <React.Fragment key={person.employeeId + person.name.baggerName + person.shiftStart}>
        <div className={styles["blank-cell"]}>
          <button className={styles["delete-btn"]} onClick={() => dispatch(deleteShift({employeeId: person.employeeId, firstName: person.name.firstName, jobPosition: positionName }))}>Delete</button>
        </div>
        <IndividualName person={person} jobPosition={positionName} />
        <p className={`start ${styles["time"]}`}>{person.shiftStart}</p>
        <p className={`end ${styles["time"]}`}>{person.shiftEnd}</p>
        <Breaks
          person={person}
          positionName={positionName}
          breakClass="break"
          breakType="breakOne"
          section={section}
        />

        <Breaks
          person={person}
          positionName={positionName}
          breakClass="lunch"
          breakType="lunch"
          section={section}
        />
        <Breaks
          person={person}
          positionName={positionName}
          breakClass="break"
          breakType="breakTwo"
          section={section}
        />
        {!positionName.includes("Fuel") ? (
          <div className={styles["ffo"]}>
            <div className={styles["ffo-left"]}></div>
            <div className={styles["ffo-middle"]}></div>
            <div className={styles["ffo-right"]}></div>
          </div>          
        ) : (
          <div className={styles["no-outline"]}></div>
        )}
      </React.Fragment>
    );
  });
  return shifts;
};

export default IndividualShifts;
