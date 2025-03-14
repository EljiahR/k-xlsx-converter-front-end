import styles from "@/styles/IndividualShifts.module.css";
import { IndividualNameProps } from "src/app/_lib/types/boardTypes"

const IndividualName = ({person, jobPosition, handleNameToggle}: IndividualNameProps) => { 
  
  return (
        person.name.editable ? 
          <input 
            className={styles["person-name"]} 
            onBlur={() => handleNameToggle(person, jobPosition, false)}
            value={person.name.firstName + " " + person.name.lastName}
          />
          :
          <p className={styles["person-name"]} onClick={() => handleNameToggle(person, jobPosition, true)}>
            {person.name.firstName + " " + person.name.lastName}
          </p>
    )
}

export default IndividualName;