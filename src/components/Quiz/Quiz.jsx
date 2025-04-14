"use client";
import * as React from "react";
import styles from "./Start.module.css";
import QuizWelcome from "./QuizWelcome";
import ActionButtons from "./ActionButtons";

function Quiz() {
	return (
		<main className={styles.container}>
			<img
				src='https://cdn.builder.io/api/v1/image/assets/TEMP/a4509c8c2d4e7e124b9a44977a94a9fd5e46a96f?placeholderIfAbsent=true&apiKey=1c0d8504a46d4cf6a4e6bf294f3e1f52'
				alt='Background'
				className={styles.backgroundImage}
			/>
			<section className={styles.contentWrapper}>
				<div className={styles.content}>
					<QuizWelcome />
					<ActionButtons />
				</div>
			</section>
		</main>
	);
}

export default Quiz;
