import styles from "@/styles/Restrooms.module.css";
import { joinWithLast } from "src/app/_lib/helpers/formatFunctions";
import { utilityTimes } from "src/app/_lib/lotTimes";
import { timeIsWithin } from "src/app/_lib/helpers/timeFunctions";
import { RestroomProps } from "src/app/_lib/types/cartTypes";

const Restrooms = ({utilityClerks}: RestroomProps) => {
  const findBaggers = (timeToCheck: string): string => {
    const baggers = utilityClerks.filter((clerk) => timeIsWithin(clerk.subshift.shiftStart, clerk.subshift.shiftEnd, timeToCheck));
    return joinWithLast(baggers.slice(0, 3).map(bagger => bagger.baggerName), ", ", " and ");
  }


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
          <div key={time} className={`${styles.slot}`}>
            <div className={styles.time}>{time}</div>
            <div className={styles.blank}>{findBaggers(time)}</div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Restrooms;
