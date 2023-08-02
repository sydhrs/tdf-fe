import { useMemo } from "react";
import styles from "./FeedContainer.module.css";
const FeedContainer = ({
  dimensionCode,
  employeeName,
  imageDimensionCode,
  onboardingMaterialsUrl,
  imageDimensionCode2,
  productDimensionCode,
  propAlignSelf,
  propFlex,
  propAlignSelf1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const welcomeToTheStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src={dimensionCode} />
            <b className={styles.ahmedMagdi}>{employeeName}</b>
            <div className={styles.minAgo}>| 10 min ago</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src={imageDimensionCode} />
        <div className={styles.welcomeToThe} style={welcomeToTheStyle}>
          {onboardingMaterialsUrl}
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.streamlineinterfaceFavoriteParent}>
          <img
            className={styles.streamlineinterfaceFavoriteIcon}
            alt=""
            src={imageDimensionCode2}
          />
          <div className={styles.ahmedMagdi}>Like</div>
        </div>
        <div className={styles.streamlineinterfaceFavoriteParent}>
          <img
            className={styles.streamlineinterfaceFavoriteIcon}
            alt=""
            src={productDimensionCode}
          />
          <div className={styles.ahmedMagdi}>Comment</div>
        </div>
      </div>
    </div>
  );
};

export default FeedContainer;
