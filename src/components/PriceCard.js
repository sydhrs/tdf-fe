import FormContainer from "./FormContainer";
import styles from "./PriceCard.module.css";
const PriceCard = () => {
  return (
    <div className={styles.frameParent}>
      <FormContainer
        dimension="/vector12.svg"
        carPriceMonthlyBudget="SAR 398,348"
        budgetLabel="Your monthly budget"
      />
      <FormContainer
        dimension="/group1.svg"
        carPriceMonthlyBudget="SAR 847,348,484,000"
        budgetLabel="Runway left"
        propWidth="54.64px"
        propHeight="54px"
      />
      <div className={styles.frameGroup}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.parent}>
            <div className={styles.div}>+39</div>
            <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
          </div>
          <div className={styles.monthlyInvestorsCount}>
            Monthly Investors Count
          </div>
        </div>
      </div>
      <button className={styles.frameWrapper}>
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon2} alt="" src="/vector15.svg" />
          <b className={styles.addANew}>Add a new tile</b>
        </div>
      </button>
    </div>
  );
};

export default PriceCard;
