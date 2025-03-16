import styles from "@/styles/IndividualShifts.module.css";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { toggleNameEdit, toggleNameEditBlur } from "src/app/_lib/redux/shiftsSlice";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

interface Props {
    person: IEmployeeBO,
    jobPosition: string
}

const IndividualName = ({person, jobPosition}: Props) => {
    const dispatch = useAppDispatch();
    return (
        person.name.isEditable ?
            <div className={styles["person-name"]}
                onBlur={(e) => dispatch(toggleNameEditBlur({e, employee: person, jobPosition, isEditable: false}))}
            >
                <input
                    value={person.name.firstName} 
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