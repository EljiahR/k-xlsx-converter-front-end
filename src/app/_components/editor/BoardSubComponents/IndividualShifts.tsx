import styles from "@/styles/IndividualShifts.module.css";
import { IndividualShiftsProps } from "src/app/_lib/types/boardTypes";
import { Breaks } from "./Breaks";

const IndividualShifts = ({
  people,
  positionName,
  section,
}: IndividualShiftsProps) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={
          positionName +
          person["firstName"] +
          person["lastName"] +
          person["shiftStart"]
        }
      >
        <div className={styles["blank-cell"]}></div>
        <p className={styles["person-name"]}>
          {person["firstName"] + " " + person["lastName"]}
        </p>
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
        {!positionName.includes("Fuel") && (
          <div className={styles["fresh-start"]}></div>
        )}
      </div>
    );
  });
  return shifts;
};

export default IndividualShifts;
