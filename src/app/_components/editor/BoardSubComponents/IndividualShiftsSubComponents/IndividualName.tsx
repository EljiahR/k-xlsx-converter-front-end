import styles from "@/styles/IndividualShifts.module.css";
import { IndividualNameProps } from "src/app/_lib/types/boardTypes"

const IndividualName = ({person}: IndividualNameProps) => {
    return (
        <p className={styles["person-name"]}>
          {person["firstName"] + " " + person["lastName"]}
        </p>
    )
}

export default IndividualName;