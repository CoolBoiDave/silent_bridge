"use client";
import React from "react";
import styles from "./team.module.css";

export const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>ABOUT US</h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0f685c65f8993cf6600c4e590a24e1b13eb97a"
        alt="About Us Image"
        className={styles.teamImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfe1ddaffc7a8edefdc41846831810a27739705f"
        alt="Team Image"
        className={styles.teamImage}
      />
    </section>
  );
};
