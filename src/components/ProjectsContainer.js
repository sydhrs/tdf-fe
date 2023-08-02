import { useMemo } from "react";
import styles from "./ProjectsContainer.module.css";
const ProjectsContainer = ({
  dashboardId,
  dashboardDescription,
  analyticsDashboardTitle,
  completionPercentage,
  timeRemaining,
  imageDimensions,
  propBorderBottom,
  propBoxSizing,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      boxSizing: propBoxSizing,
    };
  }, [propBorderBottom, propBoxSizing]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <img className={styles.frameChild} alt="" src={dashboardId} />
              <div className={styles.frameGroup}>
                <b className={styles.newAnalyticsDashboard}>
                  {dashboardDescription}
                </b>
                <div className={styles.thisIsA}>{analyticsDashboardTitle}</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.completeParent}>
                <div className={styles.complete}>{completionPercentage}</div>
                <div className={styles.daysLeft}>{timeRemaining}</div>
              </div>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameItem} style={rectangleDivStyle} />
              </div>
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src={imageDimensions} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
