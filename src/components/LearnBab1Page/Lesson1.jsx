"use client";
import { ChapterIntro } from "./ChapterIntro";
import { AlphabetGrid } from "./AlphabetGrid";
import { CompletionCard } from "./CompletionCard";
import styles from "./Lesson1.module.css";

export const Lesson1 = () => {
	return (
		<>
			<link
				href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
				rel='stylesheet'
			/>
			<main className={styles.container}>
				<article className={styles.content}>
					<ChapterIntro />
					<AlphabetGrid />
					<CompletionCard />
				</article>
			</main>
		</>
	);
};

export default Lesson1;
