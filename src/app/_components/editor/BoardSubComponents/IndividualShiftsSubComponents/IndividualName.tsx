import styles from "@/styles/IndividualShifts.module.css";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "src/app/_lib/redux/hooks";
import { changeNewFirstName, changeNewLastName, nameChange } from "src/app/_lib/redux/shiftsSlice";
import { IndividualNameProps } from "src/app/_lib/types/boardTypes"

const IndividualName = ({person, jobPosition, handleNameToggle, handleNameChange, handleNameToggleBlur}: IndividualNameProps) => { 
  const dispatch = useAppDispatch();
  const inputReference = useRef(null);
  // Might need to fix performance issue with this
  useEffect(() => {
    if (person.name.editable) {
      inputReference.current.select();
    }
  }, [person.name.editable]);



  return (
        person.name.editable ? 
          <div 
            className={styles["person-name"]} 
            onBlur={(e) => handleNameToggleBlur(e, person, jobPosition, false)}
          >
            <input 
              onChange={(e) => dispatch(changeNewFirstName(e.target.value))}
              placeholder={person.name.firstName}
              ref={inputReference}
            />
            <input 
              onChange={(e) => dispatch(changeNewLastName(e.target.value))}
              placeholder={person.name.lastName}
            />
          </div>
          :
          <p className={styles["person-name"]} onClick={() => handleNameToggle(person, jobPosition, true)}>
            {person.name.firstName + " " + person.name.lastName}
          </p>
    )
}

export default IndividualName;