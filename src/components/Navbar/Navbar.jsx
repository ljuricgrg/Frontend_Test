import React from "react";
import logo from "../../assets/icons/logo.svg";
import styles from "./Navbar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.navTitles}>
        <li>Home</li>
        <li>About</li>
        <li>Destinations</li>
        <li>Packages</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
