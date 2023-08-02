import styles from "./NavMenu.module.css";
const NavMenu = () => {
  return (
    <div className={styles.frameParent}>
      <button className={styles.icoutlineSpaceDashboardParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/icoutlinespacedashboard.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </button>
      <button className={styles.materialSymbolsformatListNParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/materialsymbolsformatlistnumberedrtlrounded.svg"
        />
        <div className={styles.projects}>Projects</div>
      </button>
      <button className={styles.materialSymbolsformatListNParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/materialsymbolseventavailableoutline.svg"
        />
        <div className={styles.projects}>Calendar</div>
      </button>
      <button className={styles.frameWrapper}>
        <div className={styles.phusersThreeParent}>
          <img
            className={styles.icoutlineSpaceDashboardIcon}
            alt=""
            src="/phusersthree.svg"
          />
          <div className={styles.projects}>
            <p className={styles.people}>{`People &`}</p>
            <p className={styles.people}>Departments</p>
          </div>
        </div>
      </button>
      <button className={styles.materialSymbolsformatListNParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/icoutlinelocaloffer.svg"
        />
        <div className={styles.projects}>Offers</div>
      </button>
      <button className={styles.materialSymbolsformatListNParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/fluentpeoplecommunity24regular.svg"
        />
        <div className={styles.projects}>Community</div>
      </button>
      <button className={styles.materialSymbolsformatListNParent}>
        <img
          className={styles.icoutlineSpaceDashboardIcon}
          alt=""
          src="/icoutlinepermmedia.svg"
        />
        <div className={styles.projects}>E-library</div>
      </button>
    </div>
  );
};

export default NavMenu;
