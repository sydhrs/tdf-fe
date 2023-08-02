import { useMemo } from "react";
import styles from "./FormContainer.module.css";
const FormContainer = ({
  dimension,
  carPriceMonthlyBudget,
  budgetLabel,
  propWidth,
  propHeight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.vectorParent}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={dimension}
          style={vectorIconStyle}
        />
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
      <div className={styles.sar398348Parent}>
        <div className={styles.sar398348}>{carPriceMonthlyBudget}</div>
        <div className={styles.yourMonthlyBudget}>{budgetLabel}</div>
      </div>
    </div>
  );
};

export default FormContainer;
