import styles from "./HomepageContainer.module.css";
const HomepageContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.icon} alt="" src="/-81@2x.png" />
        <img className={styles.ornamentsIcon} alt="" src="/ornaments.svg" />
        <img className={styles.icon1} alt="" src="/-82@2x.png" />
        <img className={styles.frameItem} alt="" src="/vector-1.svg" />
        <div className={styles.joinUsInTheInvestorsLounParent}>
          <div className={styles.joinUsInContainer}>
            <span className={styles.may23Txt}>
              <p className={styles.joinUsIn}>{`Join us in the `}</p>
              <p className={styles.investorsLounge}>
                <b>Investor’s Lounge</b>
              </p>
            </span>
          </div>
          <div className={styles.may23}>
            <span className={styles.may23Txt}>
              <p className={styles.p}>04</p>
              <p className={styles.may231}>May,23</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.frameInner} alt="" src="/group-4236.svg" />
        <div className={styles.joinUsInTheInvestorsLounGroup}>
          <div className={styles.joinUsInContainer2}>
            <span className={styles.may23Txt}>
              <p className={styles.joinUsIn}>{`Join us in the `}</p>
              <p className={styles.investorsLounge}>
                <b>Investor’s Lounge</b>
              </p>
            </span>
          </div>
          <div className={styles.jan23}>
            <span className={styles.may23Txt}>
              <p className={styles.p}>21</p>
              <p className={styles.may231}>Jan,23</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.joinUsInTheSummerIndoorEParent}>
          <div className={styles.joinUsInContainer4}>
            <span className={styles.may23Txt}>
              <p className={styles.joinUsIn}>{`Join us in the `}</p>
              <p className={styles.investorsLounge}>
                <b>Summer Indoor Event</b>
              </p>
            </span>
          </div>
          <div className={styles.aug23}>
            <span className={styles.may23Txt}>
              <p className={styles.p}>13</p>
              <p className={styles.may231}>Aug,23</p>
            </span>
          </div>
        </div>
        <img className={styles.frameInner} alt="" src="/group-42361.svg" />
      </div>
      <img className={styles.frameChild1} alt="" src="/group-4242.svg" />
    </div>
  );
};

export default HomepageContainer;
