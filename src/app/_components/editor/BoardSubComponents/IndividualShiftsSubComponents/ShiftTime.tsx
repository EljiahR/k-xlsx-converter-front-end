import styles from "@/styles/IndividualShifts.module.css";
import { MutableRefObject, useEffect } from "react";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { toggleShiftEdit } from "src/app/_lib/redux/shiftsSlice";

import { IEmployeeBO } from "src/app/_lib/types/shiftTypes"

interface Props {
    employee: IEmployeeBO,
    jobPosition: string,
    isStart: boolean,
    inputReference: MutableRefObject<any>
}

const ShiftTime = ({employee, jobPosition, isStart, inputReference}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (((isStart && employee.shiftStart.isEditable) || (!isStart && employee.shiftEnd.isEditable)) && inputReference.current) inputReference.current.select();
    }, [employee.shiftStart.isEditable, employee.shiftEnd.isEditable])

    return (
        <p 
            className={`${isStart ? "start" : "end"} ${styles["time"]}`}
            onClick={() => dispatch(toggleShiftEdit({employee, jobPosition, isStart, isEditable: true}))}
        >
            {isStart ? employee.shiftStart.time : employee.shiftEnd.time}
        </p>
    )
}

export default ShiftTime