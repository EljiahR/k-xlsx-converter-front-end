import styles from "@/styles/IndividualShifts.module.css"

const BlankRow = () => {
  return (
    <>
      <div className={styles["blank-cell"]}></div>
      <p className={styles["person-name"]}></p>
      <p className={`${styles["start"]} ${styles["time"]}`}></p>
      <p className={`${styles["end"]} ${styles["time"]}`}></p>
      <p className={styles["break"]}></p>
      <p className={styles["lunch"]}></p>
      <p className={styles["break"]}></p>
      <div className={styles["no-outline"]}></div>
    </>
  );
};
export default BlankRow;
