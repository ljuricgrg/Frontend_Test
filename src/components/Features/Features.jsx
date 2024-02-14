import React from "react";
import cardpicture from "../../assets/icons/card.svg";
import travelpicture from "../../assets/icons/Travel anywhere in the world with a suitcase.svg";
import airplanepicture from "../../assets/icons/yellow paper airplane.svg";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.column}>
        <h2>What we serve</h2>
        <h1>Top values for you</h1>
        <p>Embrace life's vastness, venture forth</p>
      </div>
      <div className={styles.column}>
        <img
          src={travelpicture}
          alt="travel"
          className={styles.travelpicture}
        />
        <h3>Lot of choices</h3>
        <p>Embrace life's vastness, venture forth</p>
      </div>
      <div className={styles.column}>
        <img
          src={airplanepicture}
          alt="airplane"
          className={styles.airplanepicture}
        />
        <p>Embrace life's vastness, venture forth</p>
      </div>
      <div className={styles.column}>
        <img src={cardpicture} alt="card" className={styles.cardpicture} />
        <p>Embrace life's vastness, venture forth</p>
      </div>
    </section>
  );
};
export default Features;
