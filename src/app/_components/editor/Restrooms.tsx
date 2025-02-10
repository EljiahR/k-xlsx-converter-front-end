import styles from "@/styles/Restrooms.module.css";
import { IEmployeeBO } from "src/app/_lib/dtoToBO";
import { utilityTimes } from "src/app/_lib/lotTimes";
import { timeIsWithin } from "src/app/_lib/timeFunctions";

interface Props {
  utilityClerks: IEmployeeBO[]
}

const Restrooms = ({utilityClerks}: Props) => {
  return (
    <div id="restrooms" className={styles.restrooms}>
      <div className={styles["double-full-slot"]}>
        <h3>Cleaning Schedule</h3>
      </div>
      
      <div className={styles.slot}>
        <div className={styles.header}>Time</div>
        <div className={styles.header}>Utility Clerk</div>
      </div>
      {utilityTimes.map((time) => {
        return (
          <div className={`${styles.slot}`}>
            <div className={styles.time}>{time}</div>
            <div className={styles.blank}>{utilityClerks.find((clerk) => timeIsWithin(clerk.subshift.shiftStart, clerk.subshift.shiftEnd, time)).firstName}</div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Restrooms;
