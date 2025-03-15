import styles from "@/styles/IndividualShifts.module.css";
import { IndividualShiftsProps } from "src/app/_lib/types/boardTypes";
import { Breaks } from "./IndividualShiftsSubComponents/Breaks";
import IndividualName from "./IndividualShiftsSubComponents/IndividualName";

const IndividualShifts = ({
  people,
  positionName,
  handleBreakClick,
  handleBreakChange,
  handleKeyUpDown,
  handleNameToggle,
  handleNameChange,
  handleNameToggleBlur,
  selectedTime,
  section,
}: IndividualShiftsProps) => {
  return people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={
          positionName +
          person.name.firstName +
          person.name.lastName +
          person["shiftStart"]
        }
      >
        <div className={styles["blank-cell"]}></div>
        <IndividualName person={person} handleNameToggle={handleNameToggle} handleNameChange={handleNameChange} handleNameToggleBlur={handleNameToggleBlur} jobPosition={positionName} />
        <p className={`start ${styles["time"]}`}>{person.shiftStart}</p>
        <p className={`end ${styles["time"]}`}>{person.shiftEnd}</p>
        <Breaks
          person={person}
          positionName={positionName}
          handleBreakClick={handleBreakClick}
          handleBreakChange={handleBreakChange}
          handleKeyUpDown={handleKeyUpDown}
          breakClass="break"
          breakType="breakOne"
          selectedTime={selectedTime}
          section={section}
         
        />

        <Breaks
          person={person}
          positionName={positionName}
          handleBreakClick={handleBreakClick}
          handleBreakChange={handleBreakChange}
          handleKeyUpDown={handleKeyUpDown}
          breakClass="lunch"
          breakType="lunch"
          selectedTime={selectedTime}
          section={section}
         
        />
        <Breaks
          person={person}
          positionName={positionName}
          handleBreakClick={handleBreakClick}
          handleBreakChange={handleBreakChange}
          handleKeyUpDown={handleKeyUpDown}
          breakClass="break"
          breakType="breakTwo"
          selectedTime={selectedTime}
          section={section}
         
        />
        {!positionName.includes("Fuel") && (
          <div className={styles["fresh-start"]}></div>
        )}
      </div>
    );
  });
};

export default IndividualShifts;
