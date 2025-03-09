import styles from "@/styles/IndividualShifts.module.css";
import { useRef, useEffect } from "react";
import { BreaksProps, IndividualShiftsProps } from "src/app/_lib/types/boardTypes";

const Breaks = ({
  person,
  positionName,
  handleBreakClick,
  handleBreakChange,
  handleKeyUpDown,
  breakClass,
  breakType,
  selectedTime,
  section,
}: BreaksProps) => {
  const inputReference = useRef(null);
  // Might need to fix performance issue with this
  useEffect(() => {
    if (person[breakType].editable) {
      inputReference.current.select();
      
    }
  }, [person[breakType].editable]);

  if (person[breakType].editable) {
    return (
      <input
        type="text"
        className={`${styles[breakClass]} ${
          selectedTime.time !== "" &&
          selectedTime.section == section &&
          (selectedTime.time == person[breakType].time ||
            selectedTime.time15 == person[breakType].time)
            ? styles.highlight
            : ""
        }`}
        value={person[breakType].time}
        onBlur={() =>
          handleBreakClick(
            person,
            positionName,
            breakType,
            false,
            section,
            person[breakType].time,
          )
        }
        onChange={(e) => handleBreakChange(e, person, positionName, breakType)}
        onKeyDown={(e) =>
          handleKeyUpDown(e, person, positionName, breakType, section)
        }
        ref={inputReference}
      />
    );
  } else {
    return (
      <p
        onFocus={() =>
          handleBreakClick(
            person,
            positionName,
            breakType,
            true,
            section,
            person[breakType].time,
          )
        }
        className={`${styles[breakClass]} ${
          selectedTime.time !== "" &&
          selectedTime.section == section &&
          (selectedTime.time == person[breakType].time ||
            selectedTime.time15 == person[breakType].time ||
            (breakType == "lunch" &&
              person[breakType].time == selectedTime.timeMinus15))
            ? styles.highlight
            : ""
        }`}
        tabIndex={person[breakType].time == "" ? 1 : 0}
      >
        {person[breakType].time
          ? /00\s[AP]M$/.test(person[breakType].time)
            ? person[breakType].time.slice(0, person[breakType].time.length - 6)
            : person[breakType].time.slice(0, person[breakType].time.length - 3)
          : ""}
      </p>
    );
  }
};



const IndividualShifts = ({
  people,
  positionName,
  handleBreakClick,
  handleBreakChange,
  handleKeyUpDown,
  selectedTime,
  section,
}: IndividualShiftsProps) => {
  const shifts = people.map((person, index) => {
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
  return shifts;
};

export default IndividualShifts;
