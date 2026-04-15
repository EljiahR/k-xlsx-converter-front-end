import styles from "@/styles/Loading.module.css";

const Loading = () => {
    return 	(
        <div id={styles["loading-container"]}>
            <div id={styles["loading-main"]}>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
                <div className={styles["bar-container"]}>
                    <div className={styles["bar"]}></div>
                </div>
            </div>
        </div>
        
    );
  
};
export default Loading;
