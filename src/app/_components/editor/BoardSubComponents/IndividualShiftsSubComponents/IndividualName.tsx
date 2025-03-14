import styles from "@/styles/IndividualShifts.module.css";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { GetEmployeeToggleAction } from "src/app/_lib/redux/reduxTypes";
import { toggleNameEdit } from "src/app/_lib/redux/shiftsSlice";
import { IndividualNameProps } from "src/app/_lib/types/boardTypes"

const IndividualName = ({person, day, jobPosition}: IndividualNameProps) => {
  const dispatch = useAppDispatch();  
  const action = {
    day,
    jobPosition,
    employeeIdentifier: {
      id: person.employeeId,
      firstName: person.name.firstName,
      lastName: person.name.lastName
    }
  }
  return (
        person.name.editable ? 
          <input className={styles["person-name"]} onBlur={() => dispatch(toggleNameEdit({...action, isEditable: false}))} />
          :
          <p className={styles["person-name"]} onClick={() => dispatch(toggleNameEdit({...action, isEditable: true}))}>
            {person.name.firstName + " " + person.name.lastName}
          </p>
    )
}

export default IndividualName;