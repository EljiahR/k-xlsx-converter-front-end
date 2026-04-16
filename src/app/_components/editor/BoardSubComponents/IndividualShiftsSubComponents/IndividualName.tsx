import styles from "@/styles/IndividualShifts.module.css";
import { useAppDispatch } from "../../../../_lib/redux/hooks";
import { changeName, toggleNameEdit, toggleNameEditBlur } from "../../../../_lib/redux/shiftsSlice";
import { IEmployeeBO } from "../../../../_lib/types/shiftTypes";

interface Props {
    person: IEmployeeBO,
    jobPosition: string,
}

const IndividualName = ({person, jobPosition}: Props) => {
    const dispatch = useAppDispatch();

    return (
        person.name.isEditable ?
            <div className={styles["person-name"]}
                onBlur={(e) => dispatch(toggleNameEditBlur({isChild: e.currentTarget.contains(e.relatedTarget), employee: person, jobPosition, isEditable: false}))}
            >
                <input
                    key={person.employeeId + person.name.lastName}
                    value={person.name.firstName} 
                    onChange={(e) => dispatch(changeName({employee: person, jobPosition, newValue: e.target.value, isFirstName: true}))}
                />
                <input
                    key={person.employeeId + person.name.firstName}
                    value={person.name.lastName}
                    onChange={(e) => dispatch(changeName({employee: person, jobPosition, newValue: e.target.value, isFirstName: false}))}
                />
            </div> 
            :
            <p className={styles["person-name"]} onClick={() => dispatch(toggleNameEdit({employee: person, jobPosition, isEditable: true}))}>
                {person.name.firstName + " " + person.name.lastName}
            </p>
    )
}

export default IndividualName;