import styles from "@/styles/Restrooms.module.css";

const Restrooms = () => {
  return (
    <div id="restrooms" className={styles.restrooms}>
      <div className={styles["double-full-slot"]}>
        <h3>Restroom Cleaning Schedule</h3>
      </div>
      
      <div className={styles["associate-slot"]}>Associate:</div>
      <div className={styles.slot}>
        <div className={styles.header}>Time</div>
        <div className={styles.header}>Task</div>
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
      <div className={styles["associate-slot"]}>Associate:</div>
      <div className={styles.slot}>
        <div className={styles.header}>Time</div>
        <div className={styles.header}>Task</div>
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
