import React from "react";
import { destinations } from "../../api/mockData";
import styles from "./Destinations.module.scss";

const Destinations = () => {
  return (
    <section className={styles.destinations}>
      <div className={styles.navigation}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Top Destination</h2>
          <h1 className={styles.secondTitle}>Explore Top Destination</h1>
        </div>
        <div className={styles.navigationItems}>
          <div className={styles.navigationItem}>City</div>
          <div className={styles.navigationItem}>Mountain</div>
          <div className={styles.navigationItem}>Forest</div>
          <div className={styles.navigationItem}>Island</div>
          <div className={styles.navigationItemSeeAll}>see all</div>
        </div>
      </div>
      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.gridItem}>
            <img src={destination.imageUrl} alt={destination.city} />
            <div className={styles.mainBlock}>
              <div className={styles.topBlock}>
                <h3 className={styles.boldCity}>{destination.city}</h3>
                <p>{destination.shortDescription}</p>
              </div>
              <div className={styles.bottomBlock}>
                <div className={styles.locationAndPrice}>
                  <div className={styles.location}>
                    {destination.city}, {destination.country}
                  </div>
                  <div className={styles.price}>
                    <p className={styles.amount}>
                      {destination.price.currency}
                      {destination.price.amount}
                    </p>
                    <p className={styles.interestFree}> x12 interest free</p>
                  </div>
                </div>
                <button className={styles.seeMore}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
