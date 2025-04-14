"use client";
import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.contactSection}>
      <div className={styles.content}>
       
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/edd7abc86b12f6c173c359b7c785d026a1745010"
            alt="Silent Bridge Logo"
            className={styles.contactLogo}
          />
        <div className={styles.contactInfo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ffca443abc3e89c46551fa72f3924fb012283ba"
          alt="Contact Image"
          className={styles.contactImage}
        />
          <div className={styles.right}>
          <h2 className={styles.title}>Contact Us</h2>
          <nav className={styles.socialLinks}>
            <a href="#" className={styles.link}>
              silentbridgeofficial
            </a>
            <a href="#" className={styles.link}>
              silentbridgeofficial
            </a>
            <a href="#" className={styles.link}>
              Silent Bridge Official
            </a>
            <a href="#" className={styles.link}>
              silentbridgeservice@gmail.com
            </a>
          </nav>
          <hr className={styles.divider} />
          <p className={styles.copyright}>
            © 2025 Silent Bridge. All Rights Reserved.
          </p>  
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};
