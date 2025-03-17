import styles from "@/styles/IndividualShifts.module.css";
import { IndividualShiftsProps } from "src/app/_lib/types/boardTypes";
import { Breaks } from "./Breaks";
import IndividualName from "./IndividualShiftsSubComponents/IndividualName";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { deleteEmployee } from "src/app/_lib/redux/shiftsSlice";

const IndividualShifts = ({
  people,
  positionName,
  section,
  inputReference
}: IndividualShiftsProps) => {
  const dispatch = useAppDispatch();
  const shifts = people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={
          positionName +
          person.employeeId +
          person.shiftStart +
          person.shiftEnd
        }
      >
        <div className={styles["blank-cell"]}>
          <button 
            className={styles["delete-btn"]}
            onClick={() => dispatch(deleteEmployee({employee: person, jobPosition: positionName}))}
          >
            Delete
          </button>
        </div>
        <IndividualName person={person} jobPosition={positionName} inputReference={inputReference} />
        <p className={`start ${styles["time"]}`}>{person.shiftStart}</p>
        <p className={`end ${styles["time"]}`}>{person.shiftEnd}</p>
        <Breaks
          person={person}
          positionName={positionName}
          breakClass="break"
          breakType="breakOne"
          section={section}
          inputReference={inputReference}
        />

        <Breaks
          person={person}
          positionName={positionName}
          breakClass="lunch"
          breakType="lunch"
          section={section}
          inputReference={inputReference}
        />
        <Breaks
          person={person}
          positionName={positionName}
          breakClass="break"
          breakType="breakTwo"
          section={section}
          inputReference={inputReference}
        />
        {!positionName.includes("Fuel") && (
          <div className={styles["fresh-start"]}></div>
        )}
      </div>
    );
  });
  return shifts;
};

export default IndividualShifts;
