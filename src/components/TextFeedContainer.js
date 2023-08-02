import styles from "./TextFeedContainer.module.css";
const TextFeedContainer = ({ dimensionCode, productCode }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-946@2x.png"
            />
            <b className={styles.saraAlMogbel}>Sara Al Mogbel</b>
            <div className={styles.minAgo}>| 10 min ago</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.welcomeToThe}>
          Welcome to the team @ahmed.d! Please see all onboarding materials
          here!
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.streamlineinterfaceFavoriteParent}>
          <img
            className={styles.streamlineinterfaceFavoriteIcon}
            alt=""
            src={dimensionCode}
          />
          <div className={styles.saraAlMogbel}>Like</div>
        </div>
        <div className={styles.streamlineinterfaceFavoriteParent}>
          <img
            className={styles.streamlineinterfaceFavoriteIcon}
            alt=""
            src={productCode}
          />
          <div className={styles.saraAlMogbel}>Comment</div>
        </div>
      </div>
    </div>
  );
};

export default TextFeedContainer;
