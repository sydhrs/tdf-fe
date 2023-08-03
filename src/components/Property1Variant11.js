import { useMemo } from "react";
import styles from "./Property1Variant11.module.css";
const DashboardCover = ({
  property1Variant11Position,
  property1Variant11BackgroundImage,
  property1Variant11Top,
  property1Variant11Left,
}) => {
  const property1Variant11Style = useMemo(() => {
    return {
      position: property1Variant11Position,
      backgroundImage: property1Variant11BackgroundImage,
      top: property1Variant11Top,
      left: property1Variant11Left,
    };
  }, [
    property1Variant11Position,
    property1Variant11BackgroundImage,
    property1Variant11Top,
    property1Variant11Left,
  ]);

  return (
    <div className={styles.property1variant11} style={property1Variant11Style}>
      <div className={styles.rightSideHover}>
        <div className={styles.rightSideHoverChild} />
      </div>
      <div className={styles.leftSideHover}>
        <div className={styles.leftSideHoverChild} />
      </div>
      <div className={styles.rightSideHover}>
        <div className={styles.rightSideHoverChild} />
      </div>
      <div className={styles.leftSideHover}>
        <div className={styles.leftSideHoverChild} />
      </div>
    </div>
  );
};

export default DashboardCover;
