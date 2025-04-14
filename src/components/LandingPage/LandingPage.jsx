"use client";
import React from "react";
import styles from "./landingPage.module.css";
import Header from "../Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Team } from "./Team";
import { Contact } from "./Contact";
const LandingPage = () => {
	return (
		<main className={styles.mainContainer}>
			<Hero />
			<About />
			<Team />
			<Contact />
		</main>
	);
};

export default LandingPage;
