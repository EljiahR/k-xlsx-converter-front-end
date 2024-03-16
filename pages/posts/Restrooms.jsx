import styles from "../styles/Restrooms.module.css"

const Restrooms = () => {
  return (
    <div id="restrooms" className={styles.restrooms}>
      <div className={styles["double-full-slot"]}>Restroom Cleaning Schedule</div>
      <div className={styles["full-slot"]}>Deep Clean (DC)</div>
      <div className={styles["full-slot"]}>Visual Inspection (VI)</div>
      <div className={styles["full-slot"]}>Light Clean (LC)</div>
      <div className={styles["full-slot"]}>Floor Sweeps (FS)</div>
      <div className={styles.slot}>
        <div className={styles.header}>Time/Task</div>
        <div className={styles.header}>Associate Name</div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>6:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>7:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>8:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>8:00 AM DC</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>9:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>10:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>10:00 AM VI</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>11:00 AM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>12:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>12:00 PM LC</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>1:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>2:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>2:00 PM VI</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>3:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>4:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>4:00 PM LC</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>5:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>5:00 PM VI</div>
        <div className={styles.blank}></div>
      </div>
      
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>6:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>6:00 PM VI</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>7:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>7:00 PM VI</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>8:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={`${styles.slot} ${styles.dark}`}>
        <div className={styles.time}>9:00 PM FS</div>
        <div className={styles.blank}></div>
      </div>
      <div className={styles.slot}>
        <div className={styles.time}>9:00 PM VI</div>
        <div className={styles.blank}></div>
      </div>
    </div>
  )
}

export default Restrooms