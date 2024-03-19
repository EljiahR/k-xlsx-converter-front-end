import styles from "@/styles/IndividualShifts.module.css";
import { useRef, useEffect } from "react";

const Breaks = ({
  person,
  positionName,
  handleBreakClick,
  handleBreakChange,
  handleKeyUpDown,
  breakClass,
  breakType,
  inputReference,
  selectedTime,
  section,
}) => {
  
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
          selectedTime.time !== "" && selectedTime.section == section &&
          (selectedTime.time == person[breakType].time || selectedTime.time15 == person[breakType].time)
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
        onKeyDown={(e) => handleKeyUpDown(e, person, positionName, breakType, section)}
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
          selectedTime.time !== "" && selectedTime.section == section &&
          ((selectedTime.time == person[breakType].time || selectedTime.time15 == person[breakType].time) || (breakType == "lunch" && person[breakType].time == selectedTime.timeMinus15))
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
  currentDay,
  handleBreakClick,
  handleBreakChange,
  handleKeyUpDown,
  selectedTime,
  section,
}) => {
  const inputReference = useRef(null);

  const shifts = people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={positionName + person["first name"] + person["last name"]}
      >
        <div className="blank-cell"></div>
        <p className="person-name">
          {person["first name"] + " " + person["last name"]}
        </p>
        <p className="start time">{person.start}</p>
        <p className="end time">{person.end}</p>
        <Breaks
          person={person}
          positionName={positionName}
          handleBreakClick={handleBreakClick}
          handleBreakChange={handleBreakChange}
          handleKeyUpDown={handleKeyUpDown}
          breakClass="break"
          breakType="break1"
          inputReference={inputReference}
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
          inputReference={inputReference}
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
          breakType="break2"
          inputReference={inputReference}
          selectedTime={selectedTime}
          section={section}
        />
      </div>
    );
  });
  return shifts;
};

export default IndividualShifts;
