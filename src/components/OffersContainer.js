import { useMemo } from "react";
import styles from "./OffersContainer.module.css";
const OffersContainer = ({
  rectangle368,
  doNotForgetToApplyOurSpec,
  tC,
  propColor,
  propColor1,
  propTextDecoration,
  propColor2,
}) => {
  const doNotForgetContainerStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const doNotForgetStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const tCStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      color: propColor2,
    };
  }, [propTextDecoration, propColor2]);

  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src={rectangle368} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.doNotForgetToApplyOurSpeWrapper}>
            <b
              className={styles.doNotForgetContainer}
              style={doNotForgetContainerStyle}
            >
              <p className={styles.doNotForget} style={doNotForgetStyle}>
                {doNotForgetToApplyOurSpec}
              </p>
              <p className={styles.tc} style={tCStyle}>
                {tC}
              </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersContainer;
