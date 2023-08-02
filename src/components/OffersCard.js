import OffersContainer from "./OffersContainer";
import styles from "./OffersCard.module.css";
const OffersCard = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.offersParent}>
        <div className={styles.offers}>Offers</div>
        <OffersContainer
          rectangle368="/rectangle-368@2x.png"
          doNotForgetToApplyOurSpec="Do not forget to apply our special employee code for your next checkout"
          tC={`T&C`}
        />
        <OffersContainer
          rectangle368="/rectangle-3681@2x.png"
          doNotForgetToApplyOurSpec="Gifting season at Oud mall!"
          tC="20% for TDF employees"
          propColor="#fff"
          propColor1="unset"
          propTextDecoration="unset"
          propColor2="unset"
        />
      </div>
    </div>
  );
};

export default OffersCard;
