import styles from "./NewJoinersContainer.module.css";
const NewJoinersContainer = ({ userImageUrl, employeeName, roleImageUrl }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src={userImageUrl} />
          <div className={styles.ahmedMagdiParent}>
            <b className={styles.ahmedMagdi}>{employeeName}</b>
            <div className={styles.productManager}>{roleImageUrl}</div>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default NewJoinersContainer;
