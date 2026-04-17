import styles from "@/styles/IndividualShift.module.css";
import { IndividualShiftProps } from "../../../_lib/types/boardTypes";
import { useAppDispatch, useAppSelector } from "../../../_lib/redux/hooks";
import { checkTimeOverlap } from "../../../_lib/helpers/timeFunctions";
import { addToBreak, changeBreak, changeName, setSelectedTime } from "../../../_lib/redux/shiftsSlice";
import { ChangeEvent, KeyboardEvent } from "react";

const IndividualShift = ({person, section}: IndividualShiftProps) => {
    const selectedTime = useAppSelector((state) => state.shifts.selectedTime);
    const dispatch = useAppDispatch();

    const handleSelectedTimeChange = (newTime: string) => {
        dispatch(setSelectedTime({ time: newTime, section }));
    }

    const handleBreakChange = (e: ChangeEvent<HTMLInputElement>, breakType: string) => {
        dispatch(changeBreak({ employee: person, breakType, minutesToChangeTo: e.target.value}))
    }

    const handleKeyDownBreakChange= (e: KeyboardEvent<HTMLInputElement>, breakType: string, currentTarget: string) => {
        e.preventDefault();
        dispatch(addToBreak({ keyDown: e.key, employee: person, breakType, section, currentTarget }));
    }
    
    return (
        <>
            <div className={styles["person-name"]  + " " + styles["shift-gap"]}>
                <input type="text" value={person.name.firstName} className={styles["shift-input"]} tabIndex={-1} readOnly />
                <input type="text" value={person.name.lastName} className={styles["shift-input"]} tabIndex={-1} readOnly />
            </div>
            <input type="text" value={person.shiftStart} className={styles["shift-input"]  + " " + styles["no-index"]} tabIndex={-1} readOnly />
            <input type="text" value={person.shiftEnd} className={styles["shift-input"] + " " + styles["shift-gap"]} tabIndex={-1} readOnly />
            <input 
                type="text" 
                value={person.breakOne} 
                className={styles["shift-input"] + " " + (selectedTime.section == section && checkTimeOverlap(person.breakOne, selectedTime) ? styles["selected-time"] : "")} 
                tabIndex={(person.breakOne.trim() == "" ? -1 : 0)} 
                onFocus={() => handleSelectedTimeChange(person.breakOne)}
                onChange={(e) => handleBreakChange(e, "breakOne")}
                onKeyDown={(e) => handleKeyDownBreakChange(e, "breakOne", person.breakOne)}
            />
            <input 
                type="text" 
                value={person.lunch} 
                className={styles["shift-input"] + " " + (selectedTime.section == section && checkTimeOverlap(person.lunch, selectedTime) ? styles["selected-time"] : "")} 
                tabIndex={(person.lunch.trim() == "" ? -1 : 0)} 
                onFocus={() => handleSelectedTimeChange(person.lunch)}
                readOnly
            />
            <input 
                type="text" 
                value={person.breakTwo} 
                className={styles["shift-input"] + " " + (selectedTime.section == section && checkTimeOverlap(person.breakTwo, selectedTime) ? styles["selected-time"] : "")} 
                tabIndex={(person.breakTwo.trim() == "" ? -1 : 0)} 
                onFocus={() => handleSelectedTimeChange(person.breakTwo)}
                readOnly
            />
        </>
    )
}

export default IndividualShift;