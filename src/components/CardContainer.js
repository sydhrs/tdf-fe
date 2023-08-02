import { useMemo } from "react";
import styles from "./CardContainer.module.css";
const CardContainer = ({
  taskNumber,
  actionLabel,
  taskDescription,
  propWidth,
}) => {
  const runEndOfStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <b className={styles.b}>{taskNumber}</b>
          </div>
          <div className={styles.runPayrollParent}>
            <b className={styles.b}>{actionLabel}</b>
            <div className={styles.runEndOf} style={runEndOfStyle}>
              {taskDescription}
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
