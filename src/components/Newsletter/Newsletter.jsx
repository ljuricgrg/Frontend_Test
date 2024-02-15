import React from "react";
import styles from "./Newsletter.module.scss";
import sendicon from "../../assets/icons/IconNewsLetter.svg";
import vectorAirplane from "../../assets/icons/VectorAirplane.svg";
import vectorLocation from "../../assets/icons/Vectorlocation.svg";
import VectorLeft from "../../assets/icons/VectorLeft.svg";
import vectorRight from "../../assets/icons/VectorRight.svg";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContainer}>
        <div className={styles.leftContainer}>
          <img
            src={VectorLeft}
            className={styles.vectorLeft}
            alt="VectorLeft"
          />
          <img
            src={vectorAirplane}
            className={styles.vectorAirplane}
            alt="VectorAirplane"
          />
        </div>
        <div className={styles.innerContainer}>
          <h2 className={styles.heading}>Sign up to our newsletter</h2>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus
            enim facilisi nunc blandit nullam.
          </p>
          <div className={styles.inputContainer}>
            <input type="email" placeholder="Enter Your email address" />
            <img src={sendicon} alt="travel" className={styles.sendIcon} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img
            src={vectorRight}
            className={styles.vectorRight}
            alt="VectorRight"
          />
          <img
            src={vectorLocation}
            className={styles.vectorLocation}
            alt="VectorLocation"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
