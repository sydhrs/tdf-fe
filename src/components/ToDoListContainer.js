import styles from "./ToDoListContainer.module.css";
const ToDoListContainer = ({ timeLabel, eventLabel, meetingTitle }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.amParent}>
          <div className={styles.am}>
            <p className={styles.p}>
              <b>{timeLabel}</b>
            </p>
            <p className={styles.p}>{eventLabel}</p>
          </div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.dailyStandupParent}>
          <b className={styles.am}>{meetingTitle}</b>
          <div className={styles.am}>zoom.info/meeting+room+39348......</div>
          <div className={styles.viewMeetingDetails}>View meeting details</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.areYouAttendingThisMeetingWrapper}>
          <div className={styles.areYouAttendingContainer}>
            <span className={styles.areYouAttendingContainer1}>
              <p className={styles.areYouAttending}>
                Are you attending this meeting?
              </p>
              <p className={styles.p}>
                <b className={styles.yes}>Yes</b>
                <span>
                  <span className={styles.span}>{` / `}</span>
                  <b className={styles.no}>No</b>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoListContainer;
