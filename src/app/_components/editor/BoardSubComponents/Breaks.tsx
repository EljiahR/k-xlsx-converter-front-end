import styles from "@/styles/IndividualShifts.module.css";
import { useEffect, useRef } from "react";
import { BreaksProps } from "src/app/_lib/types/boardTypes";

export const Breaks = ({
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
              section,
              person[breakType].time,
              false
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
              section,
              person[breakType].time,
              true
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