import styles from "@/styles/IndividualShift.module.css";
import { IndividualShiftProps } from "../../../_lib/types/boardTypes";

const IndividualShift = ({person, section}: IndividualShiftProps) => {
    return (
        <div className={styles["person"]}>
            <div className={styles["person-name"]}>
                <input type="text" value={person.name.firstName} />
                <input type="text" value={person.name.lastName} />
            </div>
            <input type="text" value={person.shiftStart} />
            <input type="text" value={person.shiftEnd} />
            <input type="text" value={person.breakOne} />
            <input type="text" value={person.lunch} />
            <input type="text" value={person.breakTwo} />
        </div>
    )
}

export default IndividualShift;