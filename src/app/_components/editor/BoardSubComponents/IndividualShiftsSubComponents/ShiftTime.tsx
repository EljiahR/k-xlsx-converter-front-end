import styles from "@/styles/IndividualShifts.module.css";

import { IEmployeeBO } from "src/app/_lib/types/shiftTypes"

interface Props {
    person: IEmployeeBO
    isStart: boolean
}

const ShiftTime = ({person, isStart}: Props) => {
    return (
        <p className={`${isStart ? "start" : "end"} ${styles["time"]}`}>{isStart ? person.shiftStart.time : person.shiftEnd.time}</p>
    )
}

export default ShiftTime