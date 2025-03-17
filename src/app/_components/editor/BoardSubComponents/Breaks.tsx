import styles from "@/styles/IndividualShifts.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/_lib/redux/hooks";
import { addToBreak, changeBreak, toggleBreakEdit } from "src/app/_lib/redux/shiftsSlice";
import { BreaksProps } from "src/app/_lib/types/boardTypes";

export const Breaks = ({
    person,
    positionName,
    breakClass,
    breakType,
    section,
    inputReference
  }: BreaksProps) => {
    const selectedTime = useAppSelector((state) => state.shifts.selectedTime);
    const dispatch = useAppDispatch();
    // const inputReference = useRef(null);
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
            dispatch(toggleBreakEdit(
              {
                employee: person,
                jobPosition: positionName,
                breakType,
                section,
                isEditable: false
              }
            ))
          }
          onChange={(e) => dispatch(changeBreak({employee: person, jobPosition: positionName, breakType, minutesToChangeTo: e.target.value}))}
          onKeyDown={(e) =>
            dispatch(addToBreak({keyDown: e.key, currentTarget: e.currentTarget.value, employee: person, jobPosition: positionName, breakType, section}))
          }
          ref={inputReference}
        />
      );
    } else {
      return (
        <p
          onFocus={() =>
            dispatch(toggleBreakEdit(
              {
                employee: person,
                jobPosition: positionName,
                breakType,
                section,
                isEditable: true
              }
            ))
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