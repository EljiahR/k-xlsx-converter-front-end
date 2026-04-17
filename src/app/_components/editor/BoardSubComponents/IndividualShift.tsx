import styles from "@/styles/IndividualShift.module.css";
import { IndividualShiftProps } from "../../../_lib/types/boardTypes";
import { useAppSelector } from "../../../_lib/redux/hooks";

const IndividualShift = ({person, section}: IndividualShiftProps) => {
    const selectedTime = useAppSelector((state) => state.shifts.selectedTime);
    
    return (
        <>
            <div className={styles["person-name"]  + " " + styles["shift-gap"]}>
                <input type="text" value={person.name.firstName} className={styles["shift-input"]} tabIndex={-1} />
                <input type="text" value={person.name.lastName} className={styles["shift-input"]} tabIndex={-1} />
            </div>
            <input type="text" value={person.shiftStart} className={styles["shift-input"]  + " " + styles["no-index"]} tabIndex={-1} />
            <input type="text" value={person.shiftEnd} className={styles["shift-input"] + " " + styles["shift-gap"]} tabIndex={-1} />
            <input type="text" value={person.breakOne} className={styles["shift-input"] + " "} tabIndex={(person.breakOne.trim() == "" ? -1 : 0)} />
            <input type="text" value={person.lunch} className={styles["shift-input"]} tabIndex={(person.lunch.trim() == "" ? -1 : 0)} />
            <input type="text" value={person.breakTwo} className={styles["shift-input"]} tabIndex={(person.breakTwo.trim() == "" ? -1 : 0)} />
        </>
    )
}

export default IndividualShift;