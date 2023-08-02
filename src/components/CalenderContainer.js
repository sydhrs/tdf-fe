import ToDoListContainer from "./ToDoListContainer";
import styles from "./CalenderContainer.module.css";
const CalenderContainer = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.calendarParent}>
        <div className={styles.calendar}>Calendar</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.april2023Parent}>
              <b className={styles.thu}>April - 2023</b>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-4230.svg"
                />
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-4229.svg"
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.monParent}>
                <div className={styles.mon}>Mon</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>14</div>
                </div>
              </div>
              <div className={styles.monParent}>
                <div className={styles.mon}>Tue</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>15</div>
                </div>
              </div>
              <div className={styles.monParent}>
                <div className={styles.mon}>Wed</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>16</div>
                </div>
              </div>
              <div className={styles.monParent}>
                <b className={styles.thu}>Thu</b>
                <div className={styles.frameDiv}>
                  <b className={styles.thu}>17</b>
                </div>
              </div>
              <div className={styles.monParent}>
                <div className={styles.mon}>Fri</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>18</div>
                </div>
              </div>
              <div className={styles.monParent}>
                <div className={styles.mon}>Sat</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>19</div>
                </div>
              </div>
              <div className={styles.monParent}>
                <div className={styles.mon}>Sun</div>
                <div className={styles.wrapper}>
                  <div className={styles.mon}>20</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.yourToDoListParent}>
                <b className={styles.thu}>Your to-do list</b>
                <div className={styles.frameWrapper1}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <ToDoListContainer
                  timeLabel="11:00"
                  eventLabel="AM"
                  meetingTitle="Daily Standup"
                />
                <ToDoListContainer
                  timeLabel="12:00"
                  eventLabel="AM"
                  meetingTitle="Call with HR manager"
                />
                <ToDoListContainer
                  timeLabel="01:00"
                  eventLabel="PM"
                  meetingTitle="Lunch Break"
                />
              </div>
            </div>
            <button className={styles.frameButton}>
              <div className={styles.createANewEventParent}>
                <b className={styles.createANew}>Create a new event</b>
                <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderContainer;
