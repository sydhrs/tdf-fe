import styles from "./NavigationSearch.module.css";
const NavigationSearch = () => {
  return (
    <nav className={styles.frameParent}>
      <input
        className={styles.frameChild}
        type="text"
        placeholder="Ask me anything"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.solarcalendarOutlineWrapper}>
            <img
              className={styles.solarcalendarOutlineIcon}
              alt=""
              src="/solarcalendaroutline.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.solarcalendarOutlineWrapper}>
            <img
              className={styles.tablermessageIcon}
              alt=""
              src="/tablermessage.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.solarcalendarOutlineWrapper}>
            <img
              className={styles.mdinotificationsNoneIcon}
              alt=""
              src="/mdinotificationsnone.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.ellipseWrapper}>
            <img
              className={styles.frameItem}
              alt=""
              src="/ellipse-947@2x.png"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationSearch;
