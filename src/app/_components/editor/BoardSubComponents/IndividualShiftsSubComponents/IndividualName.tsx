import styles from "@/styles/IndividualShifts.module.css";
import { MutableRefObject, useEffect } from "react";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { toggleNameEdit, toggleNameEditBlur } from "src/app/_lib/redux/shiftsSlice";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

interface Props {
    person: IEmployeeBO,
    jobPosition: string,
    inputReference: MutableRefObject<any>
}

const IndividualName = ({person, jobPosition, inputReference}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (person.name.isEditable) inputReference.current.select();
    }, [person.name.isEditable])

    return (
        person.name.isEditable ?
            <div className={styles["person-name"]}
                onBlur={(e) => dispatch(toggleNameEditBlur({isChild: e.currentTarget.contains(e.relatedTarget), employee: person, jobPosition, isEditable: false}))}
            >
                <input
                    value={person.name.firstName} 
                    ref={inputReference}
                />
                <input
                    value={person.name.lastName} 
                />
            </div> 
            :
            <p className={styles["person-name"]} onClick={() => dispatch(toggleNameEdit({employee: person, jobPosition, isEditable: true}))}>
                {person.name.firstName + " " + person.name.lastName}
            </p>
    )
}

export default IndividualName;