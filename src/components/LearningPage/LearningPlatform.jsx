"use client";
import React from "react";
import HeroSection from "./HeroSection";
import LearningModules from "./LearningModules";
import QuizSection from "./QuizSection";
import styles from "./LearningPlatform.module.css";

function LearningPlatform() {
	return (
		<>
			<link
				href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
				rel='stylesheet'
			/>
			<main className={styles.platform}>
				<section className={styles.content}>
					<HeroSection />
					<LearningModules />
					<QuizSection />
				</section>
			</main>
		</>
	);
}

export default LearningPlatform;
