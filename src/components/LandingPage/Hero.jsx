"use client";
import React from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        <span>Silent</span>
        <span>Bridge</span>
      </h1>
      <h2 className={styles.subtitle}>#BahasaTanpaBatas</h2>
      <button className={styles.ctaButton}>Try it now</button>
    </section>
  );
};
