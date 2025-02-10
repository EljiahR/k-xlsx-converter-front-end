import styles from "@/styles/Restrooms.module.css";
import { IEmployeeBO } from "src/app/_lib/dtoToBO";

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
      <div className={`${styles.slot}`}>
        <div className={styles.time}>11:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>11:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>12:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>12:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>1:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>1:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>2:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>2:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>3:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>3:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>4:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>4:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>5:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>5:30 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot}`}>
        <div className={styles.time}>6:00 PM</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>6:30 PM</div>
        <div className={styles.blank}></div>
      </div>
    </div>
  );
};

export default Restrooms;
