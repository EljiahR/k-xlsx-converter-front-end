import styles from "@/styles/IndividualShifts.module.css";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

interface Props {
    person: IEmployeeBO
}

const IndividualName = ({person}: Props) => {
    return (
        <p className={styles["person-name"]}>
          {person["firstName"] + " " + person["lastName"]}
        </p>
    )
}

export default IndividualName;